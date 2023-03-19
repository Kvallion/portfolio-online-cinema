import { ContentState, EditorState, convertToRaw } from "draft-js"
import draftToHtml from "draftjs-to-html"
import htmlToDraft from "html-to-draftjs"
import { useEffect, useState } from "react"
import { TextEditorProps } from "./TextEditor"

export default function useTextEditor(
	value: string,
	onChange: TextEditorProps["onChange"]
) {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())
	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (isUpdated) return

		const defaultValue = value || ""
		const blocksFromHtml = htmlToDraft(defaultValue)

		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		)
		const newEditorState = EditorState.createWithContent(contentState)
		setEditorState(newEditorState)
	}, [value, isUpdated])

	function onEditorStateChange(editorState: EditorState) {
		setIsUpdated(true)
		setEditorState(editorState)

		return onChange(
			draftToHtml(convertToRaw(editorState.getCurrentContent()))
		)
	}

	return { editorState, onEditorStateChange }
}
