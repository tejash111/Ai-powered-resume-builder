import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { ResumeInfoContext } from '../../../context/ResumeInfoContext';
import { AiChatSession } from '../../../../service/AiModel';

const PROMPT="postion title: {positionTitle} , depends on position title give me 1 lines detailed for my experience in resume just this nothing extra give in normal lines nothing extra symbols  "

const RichTextEditor = ({ onRichTextEditorChange,index}) => {
    const [value, setValue] = useState();
    const [loading,setLoading]=useState(false)

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const GenerateSummaryFromAI=async()=>{
     
      if (!resumeInfo.experience[index].title){
        alert("plese add position titile")
        return;
      }
      setLoading(true)
      const prompt=PROMPT.replace('{positionTitle}',resumeInfo.experience[index].title)
      const result = await AiChatSession.sendMessage(prompt);
      console.log(result.response.text())
      const resp=result.response.text()
      setValue(resp)
      setLoading(false)
    }
  return (
    <div>
      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summary</label>
        <button onClick={GenerateSummaryFromAI} className='btn btn-primary h-9 bg-white text-violet-700 flex gap-2'> {loading?<LoaderCircle className='animate-spin'/>:<><Brain className='h-4 w-4'/> 'Genrate from AI'</>
        
        }</button>
      </div>
    <EditorProvider>
         <Editor value={value} onChange={(e)=>{
          setValue(e.target.value)
          onRichTextEditorChange(e)
          }}>
      <Toolbar>
      <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <BtnClearFormatting/>
            <HtmlButton />
            <Separator />
            <BtnStyles />
      </Toolbar>
    </Editor>
    </EditorProvider>
    </div>
  )
}

export default RichTextEditor