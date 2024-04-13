
"use client" 
import * as Tabs from '@radix-ui/react-tabs'
import exp from 'constants'
import { Box } from 'lucide-react'
import React from 'react'

type Props = {}

function RoomTabs() {

  return (
    <div>
         <Tabs.Root defaultValue="chat">
  <Tabs.List>
    <Tabs.Trigger value="chat">Chat</Tabs.Trigger>
    <Tabs.Trigger value="whiteboard">Whiteboard</Tabs.Trigger>
    <Tabs.Trigger value="files">Files</Tabs.Trigger>
    <Tabs.Trigger value="tasks">Tasks</Tabs.Trigger>
    <Tabs.Trigger value="notes">Notes</Tabs.Trigger>
    <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>

 <Box>    
  <Tabs.Content value="chat">
      <p>Constant communication with your team.</p>
    </Tabs.Content>

  <Tabs.Content value="whiteboard">
      <p>Draw it out with the team</p>
    </Tabs.Content>

  <Tabs.Content value="files">
      <p>Project files in one place for easy access</p>
    </Tabs.Content>

  <Tabs.Content value="tasks">
      <p>Tasks for the current project</p>
    </Tabs.Content>

  <Tabs.Content value="notes">
      <p>Share thoughts and ideas</p>
    </Tabs.Content>
       <Tabs.Content value="documents">
      <p>Access and update your documents.</p>
    </Tabs.Content>

    <Tabs.Content value="settings">
      <p>Edit your profile or update contact information.</p>
    </Tabs.Content>
    </Box>
</Tabs.Root> 
tabs here
    </div>
  )
}
export default RoomTabs