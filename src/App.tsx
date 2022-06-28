import React, { FC, ReactElement, useMemo, useState } from 'react';
import { Whppt } from './Context';
import type { WhpptAppEditorsArg } from './EditorPanel';
import { WhpptEditorPanel } from './EditorPanel';
import { WhpptFullScreenPopup } from './WhpptFullScreenPopup';
import { WhpptMainNav } from './MainNav';

export type WhpptAppOptions = {
  children: ReactElement[];
  editors: WhpptAppEditorsArg;
};
export type WhpptApp = FC<WhpptAppOptions>;

export const WhpptApp: FC<WhpptAppOptions> = ({ children, editors }) => {
  const [lightMode, setLightMode] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editorState, setEditorState] = useState<{
    editor: string;
    value: any;
    onChange: (value: any) => void;
  }>({ editor: '', value: undefined, onChange: () => {} });

  const context = useMemo(
    () => ({
      editing,
      toggleEditing: () => {
        setEditing(!editing);
      },
      editorState,
      showEditor: (
        editor: string,
        value: any,
        onChange: (value: any) => void
      ) => {
        if (!editing) return;
        const internalOnChange = (changedValue: any) => {
          setEditorState({
            editor,
            onChange: internalOnChange,
            value: changedValue,
          });
          onChange(changedValue);
        };
        setEditorState({
          editor,
          value,
          onChange: internalOnChange,
        });
      },
    }),
    [editing, editorState]
  );

  return (
    <div>
      <Whppt.Provider value={context}>
        <div className={`whppt-app ${lightMode ? 'whppt-lightMode' : ''}`}>
          <WhpptMainNav setLightMode={() => setLightMode(!lightMode)} />
          <WhpptFullScreenPopup></WhpptFullScreenPopup>
          <div className="whppt-app__content">
            <div>{children}</div>
            <WhpptEditorPanel editors={editors}></WhpptEditorPanel>
          </div>
        </div>
      </Whppt.Provider>
    </div>
  );
};
