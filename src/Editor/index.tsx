import React, { FC, ReactElement } from 'react';
import { useWhppt } from '../Context';
export * from './ListEditor';
export * from './RichTextEditor';
export * from './PlainTextEditor';
export * from './FormattedTextEditor';

export const Editor: FC<{
  is: string;
  value: any;
  onChange: (value: any) => void;
  children: ({ isEditing }: { isEditing: boolean }) => ReactElement;
}> = ({ children, is, value, onChange }) => {
  const { editing, showEditor } = useWhppt();
  return (
    <div
      className="whppt-editor-selector"
      onClick={() => showEditor(is, value, onChange, undefined)}
    >
      {children({ isEditing: editing })}
    </div>
  );
};
