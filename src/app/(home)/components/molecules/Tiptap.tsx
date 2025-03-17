"use client"

import {useEditor, EditorContent} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { ToolBar } from "./ToolBar"
import Heading from "@tiptap/extension-heading"
import ListItem from "@tiptap/extension-list-item"
import BulletList from "@tiptap/extension-bullet-list"
import OrderedList from "@tiptap/extension-ordered-list"

export default function Tiptap({description, onChange, value}: {description:string, onChange:(richText: string)=> void, value:any}){
    const editor = useEditor({
        extensions: [
            StarterKit.configure({}),
            BulletList.configure({
                HTMLAttributes: {
                  class: "list-disc pl-5"
                }
              }),
              OrderedList.configure({
                HTMLAttributes: {
                  class: "list-decimal pl-5", // Numbered list dengan padding
                },
              }),
            Heading.configure({
                HTMLAttributes: {
                    class: "text-xl font-bold",
                    levels: [2]
                    
                }
            })
        ],
        content: description,
        editorProps: {
            attributes: {
                class:
                "rounded-md border min-h-[150px] border-input p-4 "
            
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML()); // <-- Pastikan ini memanggil fungsi
            console.log(editor.getHTML()); // <-- Tambahkan tanda kurung
        }        
    })

    return(
        <div className="flex flex-col">
            <ToolBar editor={editor}/>
            <EditorContent editor={editor} className="rounded-none mt-2 text-xs " placeholder="" value={value}/>
        </div>
    )

 
} 