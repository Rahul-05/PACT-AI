import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, Code,
  List, ListOrdered, Undo2, Redo2, Link2, Image as ImageIcon,
  Paperclip, MoreHorizontal
} from 'lucide-react'
import Layout from '../../components/layout/Layout'
import ToolTabs from '../../components/tools/ToolTabs'
import SuitabilityPanel from '../../components/tools/suitability/SuitabilityPanel'

function LessonPlanWorkspace() {
  const location = useLocation()
  const { text } = location.state || {}

  const [documentTitle, setDocumentTitle] = useState('The Venus Fly Trap Reading')
  const [activeTab, setActiveTab] = useState('suitability')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState([])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: 'Start typing your lesson content...',
      }),
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: text || `<p>The Venus flytrap is an insect-eating plant that lives mostly on the East Coast. Found primarily in swampy parts of the United States, like North and South Carolina, the Venus flytrap has colorful pink and green hues. Like most other plants, Venus flytraps get some nutrients from the soil, but since swampy areas tend to have soil that is nutrient-poor, it is hard for the plant to get nutrients from there. As a result, the flytrap has evolved to not only rely on the soil to survive. The Venus flytrap is a carnivorous plant because it catches insects and eats them to get the nutrients that it can't get from the soil.</p>

<p>The Venus flytrap has leaves that open to catch prey and then snap shut once it's ready to eat. On the inside of each leaf there are short, stiff hairs called trigger hairs. When an insect touches one of the three trigger hairs on either side of the leaf twice in a row, it signals to the flytrap that dinner is here. The leaves then snap shut, trapping the insect inside. Of course, some insects are able to escape, but many don't. And if they try and struggle to get out, the trap closes even tighter! The trap doesn't close all the way, though. It stays open for a few seconds, so smaller insects that might be trapped inside with the main meal can crawl out. Venus flytraps don't like to eat small insects because they don't provide a lot of nutritional value. If it's not an insect but a trapped, rather than a nut or a stone, the trap will open after about 12 hours and spit it out. The inside of a flytrap has fingerlike tentacles that help keep the insect from escaping. If you fold your hands together and lace your fingers on the inside, you'll get an idea of what the trap looks like.</p>

<p>In order to digest or eat the insect, the flytrap must squeeze its prey very tightly, as digestive juices dissolve the inside of the insect. At the end of this process, which takes anywhere from 5 to 12 days, the trap opens up again, and either rain or wind will carry the insect's remaining exoskeleton away. If the flytrap has caught an insect that is too big, and, say, the legs of the bug are sticking out of the trap, the digestion process might not happen the way it should. The trap will grow mold and once that happens, it will continue to get sicker and sicker, with the trap eventually turning black and falling off.</p>

<p>The exact amount of time it takes for the trap to open back up again depends on a variety of factors. These factors include the size of the insect, temperature, how old the trap is, and how many times the plant has gone through this process. In fact, the trap can only catch about three of its prey before it turns black, dies, and falls off. The trap can only open and close about seven times; that is why it is important to not go around touching the trap in order to get them to close. So if you ever see one, don't tease it</p>`,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none',
      },
    },
  })

  const breadcrumbs = [
    { label: 'Lesson Plan Workspace', path: '/dashboard' },
    { label: documentTitle, path: null }
  ]

  const handleAnalyze = async (formData) => {
    setIsAnalyzing(true)

    await new Promise(resolve => setTimeout(resolve, 2000))

    const mockResults = [
      {
        status: 'success',
        text: 'The Venus Flytrap Reading has a Lexile level of 1200L. This places the text at a complexity level appropriate for a sixth-grade reader.'
      },
      {
        status: 'success',
        text: 'The Venus Flytrap Reading has a Lexile level of 1200L. This places the text at a complexity level appropriate for a sixth-grade reader.'
      },
      {
        status: 'warning',
        text: 'The Venus Flytrap Reading has a Lexile level of 1200L. This places the text at a complexity level appropriate for a sixth-grade reader.'
      },
      {
        status: 'success',
        text: 'The Venus Flytrap Reading has a Lexile level of 1200L. This places the text at a complexity level appropriate for a sixth-grade reader.'
      },
      {
        status: 'success',
        text: 'The Venus Flytrap Reading has a Lexile level of 1200L. This places the text at a complexity level appropriate for a sixth-grade reader.'
      },
      {
        status: 'warning',
        text: 'The Venus Flytrap Reading has a Lexile level of 1200L. This places the text at a complexity level appropriate for a sixth-grade reader.'
      },
      {
        status: 'success',
        text: 'The Venus Flytrap Reading has a Lexile level of 1200L. This places the text at a complexity level appropriate for a sixth-grade reader.'
      },
      {
        status: 'error',
        text: 'The Venus Flytrap Reading has a Lexile level of 1200L. This places the text at a complexity level appropriate for a sixth-grade reader.'
      }
    ]

    setResults(mockResults)
    setIsAnalyzing(false)
  }

  if (!editor) {
    return null
  }

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <div className="editor-container">
        {/* Left Panel - Editor */}
        <div className="editor-panel">
          {/* Toolbar */}
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
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`editor-toolbar__button ${editor.isActive('underline') ? 'editor-toolbar__button--active' : ''}`}
              >
                <UnderlineIcon size={16} />
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
              <button className="editor-toolbar__button">
                <Link2 size={16} />
              </button>
              <button className="editor-toolbar__button">
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

          {/* Document Title */}
          <input
            type="text"
            className="document-title"
            value={documentTitle}
            onChange={(e) => setDocumentTitle(e.target.value)}
            placeholder="Untitled Document"
          />

          {/* Editor Content */}
          <EditorContent editor={editor} className="editor-content" />
        </div>

        {/* Right Panel - Tools */}
        <div className="tool-panel">
          <ToolTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {activeTab === 'suitability' && (
            <SuitabilityPanel
              onAnalyze={handleAnalyze}
              results={results}
              isAnalyzing={isAnalyzing}
            />
          )}

          {activeTab === 'adaption' && (
            <div className="tool-panel__content">
              <p>Adaption panel coming soon...</p>
            </div>
          )}

          {activeTab === 'planning' && (
            <div className="tool-panel__content">
              <p>Planning panel coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default LessonPlanWorkspace
