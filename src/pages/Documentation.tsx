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
    input: {
      name: 'Input',
      description: 'A text input component with various states and validation support.',
      props: [
        { name: 'value', type: 'string', required: false, description: 'Input value' },
        { name: 'onChange', type: '(value: string) => void', required: false, description: 'Change handler' },
        { name: 'placeholder', type: 'string', required: false, description: 'Placeholder text' },
        { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disable the input' },
        { name: 'error', type: 'string', required: false, description: 'Error message' },
        { name: 'type', type: 'string', required: false, default: 'text', description: 'Input type' }
      ],
      examples: [
        {
          title: 'Basic Input',
          code: '<Input placeholder="Enter text..." />',
          component: <Input placeholder="Enter text..." />
        },
        {
          title: 'Controlled Input',
          code: `<Input 
  value={inputValue} 
  onChange={setInputValue} 
  placeholder="Type here..." 
/>`,
          component: <Input value={inputValue} onChange={setInputValue} placeholder="Type here..." />
        },
        {
          title: 'Error State',
          code: '<Input error="This field is required" placeholder="Error input" />',
          component: <Input error="This field is required" placeholder="Error input" />
        },
        {
          title: 'Disabled State',
          code: '<Input disabled placeholder="Disabled input" />',
          component: <Input disabled placeholder="Disabled input" />
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
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeBodyText(text);
    // You could add a toast notification here
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
                          <button 
                            className="copy-button"
                            onClick={() => copyToClipboard(example.code)}
                          >
                            Copy
                          </button>
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

