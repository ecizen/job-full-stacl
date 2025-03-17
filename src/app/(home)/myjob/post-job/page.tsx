'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Editor } from "@tinymce/tinymce-react";
import Container from '@/app/(routes)/components/atoms/container';
import ProgresForm from '../../components/molecules/progres-form';
import ProgressSteps from '../../components/organisms/job-post-form';

export default function JobForm() {
  return (
    <Container>
     <section className="min-h-[calc(100vh-64px)] lg:px-12 px-0 lg:py-4 py-0 lg:bg-[#eef2f7] bg-white flex flex-col">

            <div className=' flex gap-6 items-center'>
                {/* <ProgresForm/> */}
                <ProgressSteps/>
            </div>
        </section>        
    </Container>
  )
}
