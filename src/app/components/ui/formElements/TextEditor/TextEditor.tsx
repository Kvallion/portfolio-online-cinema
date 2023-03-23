import cn from "clsx"
import { EditorProps } from "draft-js"
import { Editor } from "react-draft-wysiwyg"

import { toolbarConfig } from "@config/TextEditorToolbar.config"

import { TextFieldProps } from "../TextField"
import fieldStyle from "../TextField/TextField.module.scss"
import s from "./TextEditor.module.scss"
import useTextEditor from "./useTextEditor"

export type TextEditorProps = TextFieldProps &
	Omit<EditorProps, "editorState"> & {
		onChange: (...event: any[]) => void
		value: string
	}

const TextEditor: React.FC<TextEditorProps> = ({
	value,
	onChange,
	placeholder,
	error,
	className,
}) => {
	const { editorState, onEditorStateChange } = useTextEditor(value, onChange)

	return (
		<div
			className={cn(
				className,
				fieldStyle.field,
				s.editor_wrapper,
				"animate-fade"
			)}
		>
			<label>
				<span className={s.placeholder}>{placeholder}</span>
				<div className={s.wrapper}>
					<Editor
						toolbarClassName={s.toolbar}
						editorClassName={s.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={toolbarConfig}
					/>
				</div>
				{error && <div className={s.error}>{error.message}</div>}
			</label>
		</div>
	)
}

export { TextEditor }
