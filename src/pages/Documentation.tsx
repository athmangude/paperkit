import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  Heading,
  Link,
  BodyText,
  Input, 
  TextArea, 
  Checkbox, 
  Radio, 
  Toggle, 
  Slider, 
  ProgressBar, 
  Badge, 
  Divider, 
  Modal, 
  Notification, 
  Tag, 
  Tooltip, 
  Tabs, 
  TabItem,
  Accordion, 
  AccordionItem,
  DatePicker, 
  List, 
  ListItem,
  Pagination, 
  Table,
  TableHeader,
  TableRow,
  TableCell,
  IconButton 
} from '../components';
import './Documentation.css';

// Typography components are now imported directly

interface ComponentDoc {
  name: string;
  description: string;
  props: Array<{
    name: string;
    type: string;
    required: boolean;
    default?: string;
    description: string;
  }>;
  examples: Array<{
    title: string;
    code: string;
    component: React.ReactNode;
  }>;
}

const Documentation: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('button');
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [toggleValue, setToggleValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [progressValue, setProgressValue] = useState(75);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const components: Record<string, ComponentDoc> = {
    input: {
      name: 'Input Components',
      description: 'A comprehensive collection of form input components for user interaction.',
      props: [],
      examples: [
        {
          title: 'Input Components Overview',
          code: `// All input components grouped together
<Input placeholder="Text input" />
<TextArea placeholder="Multi-line text" />
<Checkbox label="Checkbox option" />
<Radio name="group" value="option1" label="Radio option" />
<Toggle label="Toggle switch" />
<Slider value={50} min={0} max={100} />
<DatePicker placeholder="Select date" />`,
          component: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Input placeholder="Text input" />
              <TextArea placeholder="Multi-line text" />
              <Checkbox label="Checkbox option" />
              <Radio name="group" value="option1" label="Radio option" />
              <Toggle label="Toggle switch" />
              <Slider value={50} min={0} max={100} />
              <DatePicker placeholder="Select date" />
            </div>
          )
        }
      ]
    },
    button: {
      name: 'Button',
      description: 'A versatile button component with multiple variants, sizes, and states. Supports regular buttons and icon buttons.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'Button content' },
        { name: 'variant', type: '"primary" | "secondary" | "outline"', required: false, default: 'primary', description: 'Button style variant' },
        { name: 'size', type: '"small" | "medium" | "large"', required: false, default: 'medium', description: 'Button size' },
        { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the button' },
        { name: 'onClick', type: '(event: MouseEvent) => void', required: false, description: 'Click handler' },
        { name: 'type', type: '"button" | "submit" | "reset"', required: false, default: 'button', description: 'Button type' }
      ],
      examples: [
        {
          title: 'Basic Button',
          code: '<Button>Click me</Button>',
          component: <Button>Click me</Button>
        },
        {
          title: 'Button Variants',
          code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>`,
          component: (
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          )
        },
        {
          title: 'Button Sizes',
          code: `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`,
          component: (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          )
        },
        {
          title: 'Disabled State',
          code: '<Button disabled>Disabled</Button>',
          component: <Button disabled>Disabled</Button>
        }
      ]
    },
    card: {
      name: 'Card',
      description: 'A container component for grouping related content with elevation and padding options.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'Card content' },
        { name: 'elevation', type: '"none" | "low" | "medium" | "high"', required: false, default: 'low', description: 'Shadow elevation' },
        { name: 'padding', type: '"none" | "small" | "medium" | "large"', required: false, default: 'medium', description: 'Internal padding' }
      ],
      examples: [
        {
          title: 'Basic Card',
          code: `<Card>
  <BodyText>This is a basic card with some content.</BodyText>
</Card>`,
          component: (
            <Card>
              <BodyText>This is a basic card with some content.</BodyText>
            </Card>
          )
        },
        {
          title: 'Card with Different Elevations',
          code: `<Card elevation="low">Low elevation</Card>
<Card elevation="medium">Medium elevation</Card>
<Card elevation="high">High elevation</Card>`,
          component: (
            <div style={{ display: 'flex', gap: '10px' }}>
              <Card elevation="low">Low elevation</Card>
              <Card elevation="medium">Medium elevation</Card>
              <Card elevation="high">High elevation</Card>
            </div>
          )
        }
      ]
    },
    typography: {
      name: 'Typography',
      description: 'Typography components for consistent text styling across the application.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'BodyText content' },
        { name: 'level', type: '1 | 2 | 3', required: false, description: 'Heading level (for Heading component)' },
        { name: 'variant', type: '"body" | "caption" | "overline"', required: false, default: 'body', description: 'BodyText variant (for BodyText component)' }
      ],
      examples: [
        {
          title: 'Headings',
          code: `<Heading level={1}>Heading 1</Heading>
<Heading level={2}>Heading 2</Heading>
<Heading level={3}>Heading 3</Heading>`,
          component: (
            <div>
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
            </div>
          )
        },
        {
          title: 'BodyText Variants',
          code: `<BodyText variant="body">Body text</BodyText>
<BodyText variant="caption">Caption text</BodyText>
<BodyText variant="overline">Overline text</BodyText>`,
          component: (
            <div>
              <BodyText variant="body">Body text</BodyText>
              <BodyText variant="caption">Caption text</BodyText>
              <BodyText variant="overline">Overline text</BodyText>
            </div>
          )
        },
        {
          title: 'Links',
          code: '<Link href="#">This is a link</Link>',
          component: <Link href="#">This is a link</Link>
        }
      ]
    },
    badge: {
      name: 'Badge',
      description: 'A small status indicator component for notifications and labels.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'Badge content' },
        { name: 'variant', type: '"default" | "success" | "warning" | "error"', required: false, default: 'default', description: 'Badge variant' },
        { name: 'size', type: '"small" | "medium" | "large"', required: false, default: 'medium', description: 'Badge size' }
      ],
      examples: [
        {
          title: 'Badge Variants',
          code: `<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`,
          component: (
            <div style={{ display: 'flex', gap: '10px' }}>
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          )
        }
      ]
    },
    iconbutton: {
      name: 'IconButton',
      description: 'A button component specifically designed for icons.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'Icon content' },
        { name: 'variant', type: '"primary" | "secondary" | "outline"', required: false, default: 'primary', description: 'Button style variant' },
        { name: 'size', type: '"small" | "medium" | "large"', required: false, default: 'medium', description: 'Button size' },
        { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the button' },
        { name: 'onClick', type: '(event: MouseEvent) => void', required: false, description: 'Click handler' }
      ],
      examples: [
        {
          title: 'Icon Button',
          code: '<IconButton>★</IconButton>',
          component: <IconButton>★</IconButton>
        }
      ]
    },
    progressbar: {
      name: 'ProgressBar',
      description: 'A progress indicator component.',
      props: [
        { name: 'value', type: 'number', required: false, default: '0', description: 'Progress value (0-100)' },
        { name: 'variant', type: '"default" | "success" | "warning" | "error"', required: false, default: 'default', description: 'Progress bar variant' },
        { name: 'size', type: '"small" | "medium" | "large"', required: false, default: 'medium', description: 'Progress bar size' },
        { name: 'showLabel', type: 'boolean', required: false, default: 'false', description: 'Show percentage label' }
      ],
      examples: [
        {
          title: 'Progress Bar',
          code: '<ProgressBar value={75} showLabel={true} />',
          component: <ProgressBar value={75} showLabel={true} />
        }
      ]
    },
    tag: {
      name: 'Tag',
      description: 'A small label component for categorization.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'Tag content' },
        { name: 'variant', type: '"default" | "success" | "warning" | "error"', required: false, default: 'default', description: 'Tag variant' },
        { name: 'size', type: '"small" | "medium" | "large"', required: false, default: 'medium', description: 'Tag size' },
        { name: 'onRemove', type: '() => void', required: false, description: 'Remove handler' }
      ],
      examples: [
        {
          title: 'Tag Variants',
          code: `<Tag>Default</Tag>
<Tag variant="success">Success</Tag>
<Tag variant="warning">Warning</Tag>
<Tag variant="error">Error</Tag>`,
          component: (
            <div style={{ display: 'flex', gap: '10px' }}>
              <Tag>Default</Tag>
              <Tag variant="success">Success</Tag>
              <Tag variant="warning">Warning</Tag>
              <Tag variant="error">Error</Tag>
            </div>
          )
        }
      ]
    },
    divider: {
      name: 'Divider',
      description: 'A visual separator component.',
      props: [
        { name: 'variant', type: '"horizontal" | "vertical"', required: false, default: 'horizontal', description: 'Divider orientation' },
        { name: 'spacing', type: '"small" | "medium" | "large"', required: false, default: 'medium', description: 'Spacing around divider' }
      ],
      examples: [
        {
          title: 'Horizontal Divider',
          code: '<Divider variant="horizontal" />',
          component: <Divider variant="horizontal" />
        }
      ]
    },
    modal: {
      name: 'Modal',
      description: 'A modal dialog component for overlaying content.',
      props: [
        { name: 'isOpen', type: 'boolean', required: true, description: 'Modal open state' },
        { name: 'onClose', type: '() => void', required: true, description: 'Close handler' },
        { name: 'title', type: 'string', required: false, description: 'Modal title' },
        { name: 'children', type: 'ReactNode', required: true, description: 'Modal content' },
        { name: 'size', type: '"small" | "medium" | "large"', required: false, default: 'medium', description: 'Modal size' }
      ],
      examples: [
        {
          title: 'Basic Modal',
          code: `<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example Modal">
  <BodyText>This is modal content</BodyText>
</Modal>`,
          component: <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        }
      ]
    },
    notification: {
      name: 'Notification',
      description: 'A notification component for displaying messages.',
      props: [
        { name: 'message', type: 'string', required: true, description: 'Notification message' },
        { name: 'variant', type: '"success" | "warning" | "error" | "info"', required: false, default: 'info', description: 'Notification variant' },
        { name: 'duration', type: 'number', required: false, default: '5000', description: 'Auto-close duration in ms' },
        { name: 'onClose', type: '() => void', required: false, description: 'Close handler' }
      ],
      examples: [
        {
          title: 'Notification Triggers',
          code: `// Buttons to trigger different notification variants
<Button onClick={() => setNotification({ show: true, variant: 'success', message: 'Success!' })}>
  Show Success
</Button>
<Button onClick={() => setNotification({ show: true, variant: 'warning', message: 'Warning!' })}>
  Show Warning
</Button>
<Button onClick={() => setNotification({ show: true, variant: 'error', message: 'Error!' })}>
  Show Error
</Button>
<Button onClick={() => setNotification({ show: true, variant: 'info', message: 'Info!' })}>
  Show Info
</Button>`,
          component: (
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Button onClick={() => setShowNotification(true)}>Show Success</Button>
              <Button onClick={() => setShowNotification(true)}>Show Warning</Button>
              <Button onClick={() => setShowNotification(true)}>Show Error</Button>
              <Button onClick={() => setShowNotification(true)}>Show Info</Button>
            </div>
          )
        }
      ]
    },
    tooltip: {
      name: 'Tooltip',
      description: 'A tooltip component for displaying helpful information on hover.',
      props: [
        { name: 'content', type: 'string', required: true, description: 'Tooltip content' },
        { name: 'children', type: 'ReactNode', required: true, description: 'Trigger element' },
        { name: 'position', type: '"top" | "bottom" | "left" | "right"', required: false, default: 'top', description: 'Tooltip position' },
        { name: 'showArrow', type: 'boolean', required: false, default: 'true', description: 'Show arrow pointer' }
      ],
      examples: [
        {
          title: 'Basic Tooltip',
          code: '<Tooltip content="This is a tooltip"><Button>Hover me</Button></Tooltip>',
          component: <Tooltip content="This is a tooltip"><Button>Hover me</Button></Tooltip>
        }
      ]
    },
    tabs: {
      name: 'Tabs',
      description: 'A tabbed interface component for organizing content.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'Tab items' },
        { name: 'defaultActiveTab', type: 'number', required: false, default: '0', description: 'Default active tab index' },
        { name: 'onChange', type: '(index: number) => void', required: false, description: 'Tab change handler' }
      ],
      examples: [
        {
          title: 'Basic Tabs',
          code: `<Tabs defaultActiveTab={0}>
  <TabItem label="Tab 1">Content 1</TabItem>
  <TabItem label="Tab 2">Content 2</TabItem>
  <TabItem label="Tab 3">Content 3</TabItem>
</Tabs>`,
          component: (
            <Tabs defaultActiveTab={0}>
              <TabItem label="Tab 1"><BodyText>Content 1</BodyText></TabItem>
              <TabItem label="Tab 2"><BodyText>Content 2</BodyText></TabItem>
              <TabItem label="Tab 3"><BodyText>Content 3</BodyText></TabItem>
            </Tabs>
          )
        }
      ]
    },
    accordion: {
      name: 'Accordion',
      description: 'A collapsible content component.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'Accordion items' },
        { name: 'allowMultiple', type: 'boolean', required: false, default: 'false', description: 'Allow multiple items open' }
      ],
      examples: [
        {
          title: 'Basic Accordion',
          code: `<Accordion>
  <AccordionItem title="Section 1">Content 1</AccordionItem>
  <AccordionItem title="Section 2">Content 2</AccordionItem>
  <AccordionItem title="Section 3">Content 3</AccordionItem>
</Accordion>`,
          component: (
            <Accordion>
              <AccordionItem title="Section 1"><BodyText>Content 1</BodyText></AccordionItem>
              <AccordionItem title="Section 2"><BodyText>Content 2</BodyText></AccordionItem>
              <AccordionItem title="Section 3"><BodyText>Content 3</BodyText></AccordionItem>
            </Accordion>
          )
        }
      ]
    },
    list: {
      name: 'List',
      description: 'A list component for displaying items.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'List items' },
        { name: 'variant', type: '"default" | "bordered" | "striped"', required: false, default: 'default', description: 'List variant' }
      ],
      examples: [
        {
          title: 'Basic List',
          code: `<List>
  <ListItem title="First item" />
  <ListItem title="Second item" />
  <ListItem title="Third item" />
</List>`,
          component: (
            <List>
              <ListItem title="First item" />
              <ListItem title="Second item" />
              <ListItem title="Third item" />
            </List>
          )
        }
      ]
    },
    pagination: {
      name: 'Pagination',
      description: 'A pagination component for navigating through pages.',
      props: [
        { name: 'currentPage', type: 'number', required: true, description: 'Current page number' },
        { name: 'totalPages', type: 'number', required: true, description: 'Total number of pages' },
        { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Page change handler' },
        { name: 'showFirstLast', type: 'boolean', required: false, default: 'true', description: 'Show first/last buttons' }
      ],
      examples: [
        {
          title: 'Basic Pagination',
          code: '<Pagination currentPage={1} totalPages={10} onPageChange={(page) => console.log(page)} />',
          component: <Pagination currentPage={1} totalPages={10} onPageChange={(page) => console.log(page)} />
        }
      ]
    },
    table: {
      name: 'Table',
      description: 'A table component for displaying tabular data.',
      props: [
        { name: 'children', type: 'ReactNode', required: true, description: 'Table content' },
        { name: 'variant', type: '"default" | "bordered" | "striped"', required: false, default: 'default', description: 'Table variant' },
        { name: 'size', type: '"small" | "medium" | "large"', required: false, default: 'medium', description: 'Table size' }
      ],
      examples: [
        {
          title: 'Basic Table',
          code: `<Table>
  <thead>
    <tr>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
    </tr>
  </thead>
  <tbody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </tbody>
</Table>`,
          component: (
            <Table>
              <thead>
                <tr>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                </TableRow>
              </tbody>
            </Table>
          )
        }
      ]
    }
  };

  const copyToClipboard = (text: string, buttonId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedButton(buttonId);
    setTimeout(() => setCopiedButton(null), 3000);
  };

  return (
    <div className="documentation">
      <div className="documentation-header">
        <Heading level={1}>Paper Kit Documentation</Heading>
        <BodyText>Complete guide to using Paper Kit components in your projects.</BodyText>
      </div>

      <div className="documentation-content">
        <div className="documentation-sidebar">
          <Heading level={3}>Components</Heading>
          <nav className="component-nav">
            {Object.keys(components).map((key) => (
              <button
                key={key}
                className={`nav-item ${activeComponent === key ? 'active' : ''}`}
                onClick={() => setActiveComponent(key)}
              >
                {components[key].name}
              </button>
            ))}
          </nav>
        </div>

        <div className="documentation-main">
          {activeComponent && components[activeComponent] && (
            <div className="component-doc">
              <Heading level={2}>{components[activeComponent].name}</Heading>
              <BodyText className="component-description">
                {components[activeComponent].description}
              </BodyText>

              <section className="props-section">
                <Heading level={3}>Props</Heading>
                <div className="props-table">
                  <div className="props-header">
                    <div>Prop</div>
                    <div>Type</div>
                    <div>Required</div>
                    <div>Default</div>
                    <div>Description</div>
                  </div>
                  {components[activeComponent].props.map((prop) => (
                    <div key={prop.name} className="props-row">
                      <div className="prop-name">{prop.name}</div>
                      <div className="prop-type">{prop.type}</div>
                      <div className="prop-required">{prop.required ? 'Yes' : 'No'}</div>
                      <div className="prop-default">{prop.default || '-'}</div>
                      <div className="prop-description">{prop.description}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="examples-section">
                <Heading level={3}>Examples</Heading>
                {components[activeComponent].examples.map((example, index) => (
                  <Card key={index} className="example-card">
                    <Heading level={4}>{example.title}</Heading>
                    <div className="example-content">
                      <div className="example-preview">
                        {example.component}
                      </div>
                      <div className="example-code">
                        <div className="code-header">
                          <BodyText variant="caption">Code</BodyText>
                          <Button 
                            size="small" 
                            variant="outline"
                            onClick={() => copyToClipboard(example.code, `example-${activeComponent}-${index}`)}
                          >
                            {copiedButton === `example-${activeComponent}-${index}` ? 'Copied!' : 'Copy'}
                          </Button>
                        </div>
                        <pre className="code-block">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    </div>
                  </Card>
                ))}
              </section>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Examples */}
      <section className="interactive-examples">
        <Heading level={2}>Interactive Examples</Heading>
        
        <Card className="interactive-card">
          <Heading level={3}>Modal Example</Heading>
          <Button onClick={() => setShowModal(true)}>Open Modal</Button>
          <Modal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)}
            title="Interactive Modal"
          >
            <BodyText>This is an interactive modal example. You can close it by clicking the X or outside the modal.</BodyText>
            <div style={{ marginTop: '20px' }}>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </div>
          </Modal>
        </Card>

        <Card className="interactive-card">
          <Heading level={3}>Notification Example</Heading>
          <Button onClick={() => setShowNotification(true)}>Show Notification</Button>
          {showNotification && (
            <Notification 
              message="This is an interactive notification!" 
              onClose={() => setShowNotification(false)}
            />
          )}
        </Card>

        <Card className="interactive-card">
          <Heading level={3}>Form Controls</Heading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <BodyText>Input: {inputValue}</BodyText>
              <Input value={inputValue} onChange={setInputValue} placeholder="Type here..." />
            </div>
            <div>
              <Checkbox checked={checkboxChecked} onChange={setCheckboxChecked} label="Checkbox" />
            </div>
            <div>
              <Radio 
                name="demo" 
                value="option1" 
                checked={radioValue === 'option1'} 
                onChange={(value) => setRadioValue(value)} 
                label="Option 1" 
              />
              <Radio 
                name="demo" 
                value="option2" 
                checked={radioValue === 'option2'} 
                onChange={(value) => setRadioValue(value)} 
                label="Option 2" 
              />
            </div>
            <div>
              <Toggle checked={toggleValue} onChange={setToggleValue} label="Toggle" />
            </div>
            <div>
              <BodyText>Slider: {sliderValue}</BodyText>
              <Slider value={sliderValue} onChange={setSliderValue} min={0} max={100} />
            </div>
            <div>
              <BodyText>Progress: {progressValue}%</BodyText>
              <ProgressBar value={progressValue} />
            </div>
          </div>
        </Card>

        <Card className="interactive-card">
          <Heading level={3}>Date Picker</Heading>
          <DatePicker 
            selectedDate={selectedDate} 
            onDateChange={setSelectedDate}
            placeholder="Select a date"
          />
          {selectedDate && (
            <BodyText>Selected: {selectedDate.toLocaleDateString()}</BodyText>
          )}
        </Card>

        <Card className="interactive-card">
          <Heading level={3}>Pagination</Heading>
          <Pagination 
            currentPage={currentPage} 
            totalPages={10} 
            onPageChange={setCurrentPage}
          />
          <BodyText>Current page: {currentPage}</BodyText>
        </Card>

        <Card className="interactive-card">
          <Heading level={3}>Tabs</Heading>
          <Tabs defaultActiveTab={activeTab} onChange={(index) => setActiveTab(index)}>
            <TabItem label="Tab 1">
              <BodyText>Content for tab 1</BodyText>
            </TabItem>
            <TabItem label="Tab 2">
              <BodyText>Content for tab 2</BodyText>
            </TabItem>
            <TabItem label="Tab 3">
              <BodyText>Content for tab 3</BodyText>
            </TabItem>
          </Tabs>
        </Card>
      </section>
    </div>
  );
};

export default Documentation;

