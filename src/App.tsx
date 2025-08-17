import { useState } from 'react';
import { Button } from './components/button';
import { IconButton } from './components/icon-button';
import { Input } from './components/input';
import { TextArea } from './components/textarea';
import { Checkbox } from './components/checkbox';
import { Radio } from './components/radio';
import { Toggle } from './components/toggle';
import { Slider } from './components/slider';
import { ProgressBar } from './components/progress-bar';
import { Card } from './components/card';
import { Badge } from './components/badge';
import { Divider } from './components/divider';
import { DatePicker } from './components/date-picker';
import { Modal } from './components/modal';
import { Notification } from './components/notification';
import { Tag } from './components/tag';
import { Tooltip } from './components/tooltip';
import { Tabs, TabItem } from './components/tabs';
import { Accordion, AccordionItem } from './components/accordion';
import { List, ListItem } from './components/list';
import { Pagination } from './components/pagination';
import { Table, TableHeader, TableRow, TableCell } from './components/table';
import { Heading, Link, BodyText } from './components/typography';
import './styles/globals.css';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [toggleChecked, setToggleChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [progressValue, setProgressValue] = useState(75);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="app">
      <header className="app-header">
        <Heading level={1}>Paper Kit Design System</Heading>
        <BodyText>
          A hand-drawn, sketchy design system built with React and the Patrick Hand font.
        </BodyText>
      </header>

      <main className="app-main">
        {/* Navigation Menu */}
        <section className="component-section">
          <Card elevation="medium" padding="large">
            <Heading level={2}>📋 Component Navigation</Heading>
            <BodyText>Click to jump to different component sections:</BodyText>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
              <Button size="small" onClick={() => document.getElementById('typography')?.scrollIntoView()}>Typography</Button>
              <Button size="small" onClick={() => document.getElementById('buttons')?.scrollIntoView()}>Buttons</Button>
              <Button size="small" onClick={() => document.getElementById('progress-badges')?.scrollIntoView()}>Progress & Badges</Button>
              <Button size="small" onClick={() => document.getElementById('dividers')?.scrollIntoView()}>Dividers</Button>
              <Button size="small" onClick={() => document.getElementById('date-picker')?.scrollIntoView()}>Date Picker</Button>
              <Button size="small" onClick={() => document.getElementById('form-inputs')?.scrollIntoView()}>Form Inputs</Button>
              <Button size="small" onClick={() => document.getElementById('form-controls')?.scrollIntoView()}>Form Controls</Button>
              <Button size="small" onClick={() => document.getElementById('cards')?.scrollIntoView()}>Cards</Button>
              <Button size="small" onClick={() => document.getElementById('modal-notification')?.scrollIntoView()}>Modal & Notification</Button>
              <Button size="small" onClick={() => document.getElementById('tags-tooltips')?.scrollIntoView()}>Tags & Tooltips</Button>
              <Button size="small" onClick={() => document.getElementById('tabs-accordion')?.scrollIntoView()}>Tabs & Accordion</Button>
              <Button size="small" onClick={() => document.getElementById('list-pagination')?.scrollIntoView()}>List & Pagination</Button>
              <Button size="small" onClick={() => document.getElementById('table')?.scrollIntoView()}>Table</Button>
              <Button size="small" onClick={() => document.getElementById('interactive-demo')?.scrollIntoView()}>Interactive Demo</Button>
            </div>
          </Card>
        </section>

        {/* Test Section - All Components */}
        <section className="component-section">
          <Heading level={2}>🔍 Component Test - All Components Should Be Visible</Heading>
          <Card elevation="medium" padding="large">
            <BodyText>
              If you can see this section, the basic components are working. Let's test all components:
            </BodyText>
            
            <div style={{ marginTop: '20px', padding: '10px', border: '2px dashed #ccc' }}>
              <h3>Quick Component Test:</h3>
              <Button>Test Button</Button>
              <Badge>Test Badge</Badge>
              <Tag>Test Tag</Tag>
              <ProgressBar value={50} max={100} />
              <Divider />
              <p>If you see all the above components, the showcase should be working.</p>
            </div>
          </Card>
        </section>

        {/* Typography Section */}
        <section id="typography" className="component-section">
          <Heading level={2}>Typography</Heading>
          <Card elevation="medium" padding="large">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <BodyText>
              This is body text with the Patrick Hand font. It has a natural, handwritten feel that makes the interface feel more personal and approachable.
            </BodyText>
            <Link href="https://example.com">This is a link</Link>
            <br />
            <Link href="https://example.com" external>External link ↗</Link>
          </Card>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="component-section">
          <Heading level={2}>Buttons</Heading>
          <Card elevation="medium" padding="large">
            <div className="button-grid">
              <div className="button-group">
                <h3>Button Sizes</h3>
                <Button size="small">Small Button</Button>
                <Button size="medium">Medium Button</Button>
                <Button size="large">Large Button</Button>
              </div>
              
              <div className="button-group">
                <h3>Button Variants</h3>
                <Button variant="outline">Outline</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
              
              <div className="button-group">
                <h3>Icon Buttons</h3>
                <IconButton icon="★" size="small" />
                <IconButton icon="♥" size="medium" />
                <IconButton icon="⚡" size="large" />
              </div>
              
              <div className="button-group">
                <h3>Button States</h3>
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Progress & Badges Section */}
        <section id="progress-badges" className="component-section">
          <Heading level={2}>Progress & Badges</Heading>
          <Card elevation="medium" padding="large">
            <div className="progress-grid">
              <div className="progress-group">
                <h3>Progress Bars</h3>
                <ProgressBar value={progressValue} max={100} showLabel />
                <ProgressBar value={60} max={100} variant="success" showLabel />
                <ProgressBar value={30} max={100} variant="warning" showLabel />
                <ProgressBar value={90} max={100} variant="error" showLabel />
              </div>
              
              <div className="badge-group">
                <h3>Badges</h3>
                <div className="badge-row">
                  <Badge>5</Badge>
                  <Badge variant="primary">New</Badge>
                  <Badge variant="success">✓</Badge>
                  <Badge variant="warning">!</Badge>
                  <Badge variant="error">3</Badge>
                </div>
                <div className="badge-row">
                  <Badge size="small">1</Badge>
                  <Badge size="medium">2</Badge>
                  <Badge size="large">3</Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Dividers Section */}
        <section id="dividers" className="component-section">
          <Heading level={2}>Dividers</Heading>
          <Card elevation="medium" padding="large">
            <div className="divider-demo">
              <p>Content above</p>
              <Divider />
              <p>Content below</p>
              
              <Divider variant="dashed" />
              <Divider variant="dotted" />
              <Divider variant="wavy" />
              
              <div className="vertical-dividers">
                <span>Left</span>
                <Divider orientation="vertical" />
                <span>Right</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Date Picker Section */}
        <section id="date-picker" className="component-section">
          <Heading level={2}>Date Picker</Heading>
          <Card elevation="medium" padding="large">
            <div className="date-picker-grid">
              <div className="date-picker-group">
                <h3>Basic Date Picker</h3>
                <DatePicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  placeholder="Select a date..."
                />
                <p>Selected: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</p>
              </div>
              
              <div className="date-picker-group">
                <h3>Date & Time Picker</h3>
                <DatePicker
                  value={selectedDateTime}
                  onChange={setSelectedDateTime}
                  showTimePicker={true}
                  timeFormat="12h"
                  placeholder="Select date and time..."
                />
                <p>Selected: {selectedDateTime ? selectedDateTime.toLocaleString() : 'None'}</p>
              </div>
              
              <div className="date-picker-group">
                <h3>With Date Range</h3>
                <DatePicker
                  minDate={new Date()}
                  maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                  placeholder="Select date (next 30 days)..."
                />
              </div>
              
              <div className="date-picker-group">
                <h3>Different Format</h3>
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder="DD/MM/YYYY format..."
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Form Inputs Section */}
        <section id="form-inputs" className="component-section">
          <Heading level={2}>Form Inputs</Heading>
          <Card elevation="medium" padding="large">
            <div className="form-grid">
              <div className="form-group">
                <label>Text Input</label>
                <Input
                  placeholder="Enter some text..."
                  value={inputValue}
                  onChange={setInputValue}
                />
              </div>
              
              <div className="form-group">
                <label>Text Input with Error</label>
                <Input
                  placeholder="This has an error"
                  error="This field is required"
                />
              </div>
              
              <div className="form-group">
                <label>Text Area</label>
                <TextArea
                  placeholder="Enter a longer message..."
                  value={textareaValue}
                  onChange={setTextareaValue}
                  rows={4}
                />
              </div>
              
              <div className="form-group">
                <label>Disabled Input</label>
                <Input
                  placeholder="This is disabled"
                  disabled
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Form Controls Section */}
        <section className="component-section">
          <Heading level={2}>Form Controls</Heading>
          <Card elevation="medium" padding="large">
            <div className="controls-grid">
              <div className="control-group">
                <h3>Checkboxes</h3>
                <Checkbox
                  label="Accept terms and conditions"
                  checked={checkboxChecked}
                  onChange={setCheckboxChecked}
                />
                <Checkbox
                  label="Subscribe to newsletter"
                  disabled
                />
              </div>
              
              <div className="control-group">
                <h3>Radio Buttons</h3>
                <Radio
                  label="Option 1"
                  value="option1"
                  group="example"
                  checked={radioValue === 'option1'}
                  onChange={() => setRadioValue('option1')}
                />
                <Radio
                  label="Option 2"
                  value="option2"
                  group="example"
                  checked={radioValue === 'option2'}
                  onChange={() => setRadioValue('option2')}
                />
                <Radio
                  label="Option 3 (Disabled)"
                  value="option3"
                  group="example"
                  disabled
                />
              </div>
              
              <div className="control-group">
                <h3>Toggle Switches</h3>
                <Toggle
                  label="Enable notifications"
                  checked={toggleChecked}
                  onChange={setToggleChecked}
                />
                <Toggle
                  label="Dark mode (Disabled)"
                  disabled
                />
              </div>
              
              <div className="control-group">
                <h3>Slider</h3>
                <Slider
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={setSliderValue}
                  showValue
                />
                <Slider
                  min={0}
                  max={50}
                  value={25}
                  disabled
                  showValue
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="component-section">
          <Heading level={2}>Cards</Heading>
          <div className="card-grid">
            <Card elevation="low" padding="medium">
              <Heading level={3}>Low Elevation</Heading>
              <BodyText>
                This card has a subtle shadow effect.
              </BodyText>
            </Card>
            
            <Card elevation="medium" padding="medium">
              <Heading level={3}>Medium Elevation</Heading>
              <BodyText>
                This card has a medium shadow effect.
              </BodyText>
            </Card>
            
            <Card elevation="high" padding="medium">
              <Heading level={3}>High Elevation</Heading>
              <BodyText>
                This card has a prominent shadow effect.
              </BodyText>
            </Card>
          </div>
        </section>

        {/* Modal & Notification Section */}
        <section className="component-section">
          <Heading level={2}>Modal & Notification</Heading>
          <Card elevation="medium" padding="large">
            <div className="modal-demo">
              <Button onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
              
              <Button onClick={() => setShowNotification(true)}>
                Show Notification
              </Button>
            </div>
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
              <BodyText>
                This is an example modal with hand-drawn styling. You can close it by clicking the X button or clicking outside the modal.
              </BodyText>
              <div className="modal-actions">
                <Button onClick={() => setIsModalOpen(false)}>Close</Button>
              </div>
            </Modal>
            
            {showNotification && (
              <Notification
                type="success"
                title="Success!"
                message="This is a success notification with hand-drawn styling."
                onClose={() => setShowNotification(false)}
              />
            )}
          </Card>
        </section>

        {/* Tags & Tooltips Section */}
        <section className="component-section">
          <Heading level={2}>Tags & Tooltips</Heading>
          <Card elevation="medium" padding="large">
            <div className="tags-demo">
              <h3>Tags</h3>
              <div className="tag-group">
                <Tag>Default</Tag>
                <Tag variant="primary">Primary</Tag>
                <Tag variant="success">Success</Tag>
                <Tag variant="warning">Warning</Tag>
                <Tag variant="error">Error</Tag>
                <Tag variant="info">Info</Tag>
                <Tag removable onRemove={() => console.log('Removed')}>Removable</Tag>
              </div>
            </div>
            
            <div className="tooltips-demo">
              <h3>Tooltips</h3>
              <div className="tooltip-group">
                <Tooltip content="This is a tooltip on the top">
                  <Button>Hover me (Top)</Button>
                </Tooltip>
                
                <Tooltip content="This is a tooltip on the bottom" position="bottom">
                  <Button>Hover me (Bottom)</Button>
                </Tooltip>
                
                <Tooltip content="This is a tooltip on the left" position="left">
                  <Button>Hover me (Left)</Button>
                </Tooltip>
                
                <Tooltip content="This is a tooltip on the right" position="right">
                  <Button>Hover me (Right)</Button>
                </Tooltip>
              </div>
            </div>
          </Card>
        </section>

        {/* Tabs & Accordion Section */}
        <section className="component-section">
          <Heading level={2}>Tabs & Accordion</Heading>
          <Card elevation="medium" padding="large">
            <div className="tabs-demo">
              <h3>Tabs</h3>
              <Tabs defaultActiveTab={0} onChange={(index) => console.log('Tab changed to:', index)}>
                <TabItem label="Tab 1">
                  <BodyText>This is the content for tab 1. It contains some sample text.</BodyText>
                </TabItem>
                <TabItem label="Tab 2">
                  <BodyText>This is the content for tab 2. It contains different content.</BodyText>
                </TabItem>
                <TabItem label="Tab 3">
                  <BodyText>This is the content for tab 3. It contains more sample text.</BodyText>
                </TabItem>
              </Tabs>
            </div>
            
            <div className="accordion-demo">
              <h3>Accordion</h3>
              <Accordion>
                <AccordionItem title="Accordion Item 1" defaultOpen>
                  <BodyText>This is the content for accordion item 1. It can contain any content.</BodyText>
                </AccordionItem>
                <AccordionItem title="Accordion Item 2">
                  <BodyText>This is the content for accordion item 2. It can contain any content.</BodyText>
                </AccordionItem>
                <AccordionItem title="Accordion Item 3">
                  <BodyText>This is the content for accordion item 3. It can contain any content.</BodyText>
                </AccordionItem>
              </Accordion>
            </div>
          </Card>
        </section>

        {/* List & Pagination Section */}
        <section className="component-section">
          <Heading level={2}>List & Pagination</Heading>
          <Card elevation="medium" padding="large">
            <div className="list-demo">
              <h3>List</h3>
              <List variant="default" size="medium">
                <ListItem
                  icon="📧"
                  title="Email"
                  subtitle="Check your inbox for new messages"
                  onClick={() => console.log('Email clicked')}
                />
                <ListItem
                  icon="📱"
                  title="Phone"
                  subtitle="Call or text someone"
                  onClick={() => console.log('Phone clicked')}
                />
                <ListItem
                  icon="📁"
                  title="Files"
                  subtitle="Access your documents"
                  onClick={() => console.log('Files clicked')}
                />
                <ListItem
                  icon="⚙️"
                  title="Settings"
                  subtitle="Configure your preferences"
                  onClick={() => console.log('Settings clicked')}
                />
              </List>
            </div>
            
            <div className="pagination-demo">
              <h3>Pagination</h3>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
                showFirstLast
                showPrevNext
                maxVisiblePages={5}
              />
            </div>
          </Card>
        </section>

        {/* Table Section */}
        <section className="component-section">
          <Heading level={2}>Table</Heading>
          <Card elevation="medium" padding="large">
            <Table variant="bordered" size="medium">
              <thead>
                <TableRow>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Role</TableHeader>
                  <TableHeader>Status</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell data-label="Name">John Doe</TableCell>
                  <TableCell data-label="Email">john@example.com</TableCell>
                  <TableCell data-label="Role">Developer</TableCell>
                  <TableCell data-label="Status">
                    <Badge variant="success">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell data-label="Name">Jane Smith</TableCell>
                  <TableCell data-label="Email">jane@example.com</TableCell>
                  <TableCell data-label="Role">Designer</TableCell>
                  <TableCell data-label="Status">
                    <Badge variant="warning">Pending</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell data-label="Name">Bob Johnson</TableCell>
                  <TableCell data-label="Email">bob@example.com</TableCell>
                  <TableCell data-label="Role">Manager</TableCell>
                  <TableCell data-label="Status">
                    <Badge variant="error">Inactive</Badge>
                  </TableCell>
                </TableRow>
              </tbody>
            </Table>
          </Card>
        </section>

        {/* Interactive Demo Section */}
        <section className="component-section">
          <Heading level={2}>Interactive Demo</Heading>
          <Card elevation="medium" padding="large">
            <Heading level={3}>Form Example</Heading>
            <div className="demo-form">
              <div className="form-group">
                <label>Name</label>
                <Input
                  placeholder="Enter your name"
                  value={inputValue}
                  onChange={setInputValue}
                />
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <TextArea
                  placeholder="Tell us about yourself..."
                  value={textareaValue}
                  onChange={setTextareaValue}
                  rows={3}
                />
              </div>
              
              <div className="form-group">
                <label>Progress</label>
                <ProgressBar value={progressValue} max={100} showLabel />
                <Slider
                  min={0}
                  max={100}
                  value={progressValue}
                  onChange={setProgressValue}
                  showValue
                />
              </div>
              
              <div className="form-group">
                <label>Preferences</label>
                <div className="checkbox-group">
                  <Checkbox
                    label="Email updates"
                    checked={checkboxChecked}
                    onChange={setCheckboxChecked}
                  />
                  <Checkbox
                    label="SMS notifications"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Volume</label>
                <Slider
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={setSliderValue}
                  showValue
                />
              </div>
              
              <div className="form-actions">
                <Button variant="primary" size="large">
                  Submit
                </Button>
                <Button variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="app-footer">
        <BodyText>
          Paper Kit Design System - Built with React and Patrick Hand font
        </BodyText>
      </footer>
    </div>
  );
}

export default App;
