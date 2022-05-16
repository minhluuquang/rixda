import * as Accordion from '@radix-ui/react-accordion';

function App() {
  return (
    <div className='container mx-auto mt-10'>
      <Accordion.Root
        type='single'
        defaultValue='item-1'
        collapsible
        className='max-w-xs ring ring-gray-400 rounded-md p-4'
      >
        <Accordion.Item value='item-1' className='py-2'>
          <Accordion.Header>
            <Accordion.Trigger>Option 1?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className='bg-red-400'>
            Lorem Isum 1
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-2' className='py-2'>
          <Accordion.Header>
            <Accordion.Trigger>Option 2</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className='bg-red-400'>
            Lorem Isum 2
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-3' className='py-2'>
          <Accordion.Header>
            <Accordion.Trigger>Option 3</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className='bg-red-400'>
            Lorem Isum 3
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export default App;
