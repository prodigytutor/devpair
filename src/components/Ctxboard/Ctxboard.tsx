
import * as Tabs from '@radix-ui/react-tabs';

export default function Ctxboard () {
    return (
  <Tabs.Root className='' defaultValue='tabDoc'>
    <Tabs.List>
      <Tabs.Trigger className='' value='tabDoc'>
        Documents
    </Tabs.Trigger>
    <Tabs.Trigger className='' value='tabNote'>
        Notes
    </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tabDoc">
      <p className="Text">Make changes to your documents here. Click save when you're done.</p>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tabNote">
      <p className="Text">Change your notes here.</p>
    </Tabs.Content>
  </Tabs.Root>)
}