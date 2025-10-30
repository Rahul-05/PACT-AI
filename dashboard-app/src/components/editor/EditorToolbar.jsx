import { 
  Bold, Italic, Underline, Strikethrough, Code,
  List, ListOrdered, Undo2, Redo2,
  Link2, Image as ImageIcon, Paperclip, MoreHorizontal
} from 'lucide-react'

function EditorToolbar({ editor }) {
  if (!editor) return null

  const addLink = () => {
    const url = window.prompt('Enter URL')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  const addImage = () => {
    const url = window.prompt('Enter image URL')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <div className="editor-toolbar">
      <div className="editor-toolbar__group">
        <select 
          className="editor-toolbar__select"
          onChange={(e) => {
            const value = e.target.value
            if (value === 'p') editor.chain().focus().setParagraph().run()
            if (value === 'h1') editor.chain().focus().toggleHeading({ level: 1 }).run()
            if (value === 'h2') editor.chain().focus().toggleHeading({ level: 2 }).run()
          }}
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
        </select>
      </div>

      <div className="editor-toolbar__group">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`editor-toolbar__button ${editor.isActive('bold') ? 'editor-toolbar__button--active' : ''}`}
        >
          <Bold size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`editor-toolbar__button ${editor.isActive('italic') ? 'editor-toolbar__button--active' : ''}`}
        >
          <Italic size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`editor-toolbar__button ${editor.isActive('strike') ? 'editor-toolbar__button--active' : ''}`}
        >
          <Strikethrough size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`editor-toolbar__button ${editor.isActive('code') ? 'editor-toolbar__button--active' : ''}`}
        >
          <Code size={16} />
        </button>
      </div>

      <div className="editor-toolbar__group">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`editor-toolbar__button ${editor.isActive('bulletList') ? 'editor-toolbar__button--active' : ''}`}
        >
          <List size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`editor-toolbar__button ${editor.isActive('orderedList') ? 'editor-toolbar__button--active' : ''}`}
        >
          <ListOrdered size={16} />
        </button>
      </div>

      <div className="editor-toolbar__group">
        <button onClick={addLink} className="editor-toolbar__button">
          <Link2 size={16} />
        </button>
        <button onClick={addImage} className="editor-toolbar__button">
          <ImageIcon size={16} />
        </button>
        <button className="editor-toolbar__button">
          <Paperclip size={16} />
        </button>
      </div>

      <div className="editor-toolbar__group">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="editor-toolbar__button"
        >
          <Undo2 size={16} />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="editor-toolbar__button"
        >
          <Redo2 size={16} />
        </button>
      </div>

      <div className="editor-toolbar__group">
        <button className="editor-toolbar__button">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  )
}

export default EditorToolbar
