import React, { FC, ReactElement } from "react";
import { useWhppt } from "../../Context";
import { EditorArgs } from "../EditorArgs";
import { EditorOptions } from "../EditorOptions";

export const RichTextEditor: FC<
  EditorArgs<string> & {
    label?: string;
    children: ({ isEditing }: { isEditing: boolean }) => ReactElement;
  }
> = ({ children, value, onChange, label, options = {} as EditorOptions }) => {
  const { editing, showEditor } = useWhppt();
  return (
    <div
      className="whppt-editor-selector"
      onClick={() =>
        showEditor("richText", value, onChange, {
          label: label || "Rich Text",
          options,
        })
      }
    >
      {children({ isEditing: editing })}
    </div>
  );
};
