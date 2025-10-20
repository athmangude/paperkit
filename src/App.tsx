import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaStar, FaHeart, FaArrowRight, FaCog } from 'react-icons/fa';
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
  IconButton,
  NavigationBar,
  Hero,
  Menu,
  MenuItem,
  DropdownMenu,
  Select
} from './components/index';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [toggleValue, setToggleValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [progressValue, setProgressValue] = useState(75);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [copiedButton, setCopiedButton] = useState<string | null>(null);
  const [selectValue, setSelectValue] = useState('');
  const [selectedMenuValue, setSelectedMenuValue] = useState('copy');

  const handleMenuChange = (value: string) => {
    setSelectedMenuValue(value);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopy = (text: string, buttonId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedButton(buttonId);
    setTimeout(() => setCopiedButton(null), 3000);
  };

  return (
    <div className="App">
      <NavigationBar 
        title="Protokit"
        navigationComponents={
          <div>
            <RouterLink to="/about">
              <Button variant="outline">About</Button>
            </RouterLink>
            <RouterLink to="/documentation">
              <Button variant="outline">Documentation</Button>
            </RouterLink>
            <RouterLink to="/showcase">
              <Button variant="outline">Showcase</Button>
            </RouterLink>
          </div>
        }
      />

      {/* Setup Section */}
      <Hero>
        <div className="container">
          <Heading level={2}>Getting Started</Heading>
          <BodyText>Learn how to integrate Paper Kit into your React projects.</BodyText>

          <div className="setup-grid">
            <Card className="setup-card">
              <Heading level={3}>Installation</Heading>
              <div className="code-block">
                <pre><code>npm install protokit</code></pre>
                <Button 
                  size="small" 
                  variant="outline" 
                  onClick={() => handleCopy('npm install protokit', 'npm-install')}
                >
                  {copiedButton === 'npm-install' ? 'Copied!' : 'Copy'}
                </Button>
              </div>
                             <BodyText>Or using yarn:</BodyText>
               <div className="code-block">
                 <pre><code>yarn add protokit</code></pre>
                 <Button 
                   size="small" 
                   variant="outline" 
                   onClick={() => handleCopy('yarn add protokit', 'yarn-add')}
                 >
                   {copiedButton === 'yarn-add' ? 'Copied!' : 'Copy'}
                 </Button>
               </div>
             </Card>

             <Card className="setup-card">
               <Heading level={3}>Dependencies</Heading>
               <BodyText><strong>Required:</strong></BodyText>
               <ul>
                 <li>React 18.0.0 or higher</li>
                 <li>TypeScript 4.9.0 or higher</li>
               </ul>
               <BodyText><strong>Optional:</strong></BodyText>
               <ul>
                 <li>CSS Modules (for custom styling)</li>
                 <li>React Router (for navigation)</li>
               </ul>
             </Card>

             <Card className="setup-card">
               <Heading level={3}>Basic Usage</Heading>
               <div className="code-block">
                 <pre><code>{`import { Button, Card, Typography } from 'protokit';

function App() {
  return (
    <Card>
      <Typography.Heading level={1}>Hello Protokit!</Typography.Heading>
      <Button>Click me</Button>
    </Card>
  );
}`}</code></pre>
                 <Button 
                   size="small" 
                   variant="outline" 
                   onClick={() => handleCopy(`import { Button, Card, Typography } from 'protokit';

function App() {
  return (
    <Card>
      <Typography.Heading level={1}>Hello Protokit!</Typography.Heading>
      <Button>Click me</Button>
    </Card>
  );
}`, 'basic-usage')}
                 >
                   {copiedButton === 'basic-usage' ? 'Copied!' : 'Copy'}
                 </Button>
               </div>
             </Card>

             <Card className="setup-card">
               <Heading level={3}>Project Integration</Heading>
               <BodyText><strong>CSS Setup:</strong></BodyText>
               <BodyText>Import the base styles in your main CSS file:</BodyText>
               <div className="code-block">
                 <pre><code>@import 'paper-kit/dist/styles.css';</code></pre>
                 <Button 
                   size="small" 
                   variant="outline" 
                   onClick={() => handleCopy('@import \'paper-kit/dist/styles.css\';', 'css-import')}
                 >
                   {copiedButton === 'css-import' ? 'Copied!' : 'Copy'}
                 </Button>
               </div>
               <BodyText><strong>Font Setup:</strong></BodyText>
               <BodyText>Add Patrick Hand font to your HTML:</BodyText>
               <div className="code-block">
                 <pre><code>{`<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">`}</code></pre>
                 <Button 
                   size="small" 
                   variant="outline" 
                   onClick={() => handleCopy('<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">', 'font-link')}
                 >
                   {copiedButton === 'font-link' ? 'Copied!' : 'Copy'}
                 </Button>
               </div>
             </Card>
          </div>
        </div>
      </Hero>

      {/* Component Navigation */}
      <section className="component-navigation">
        <div className="container">
          <Heading level={2}>Component Navigation</Heading>
          <div className="nav-grid">
            <Button onClick={() => scrollToSection('typography')}>Typography</Button>
            <Button onClick={() => scrollToSection('buttons')}>Buttons</Button>
            <Button onClick={() => scrollToSection('progress-badges')}>Progress & Badges</Button>
            <Button onClick={() => scrollToSection('dividers')}>Dividers</Button>
            <Button onClick={() => scrollToSection('date-picker')}>Date Picker</Button>
            <Button onClick={() => scrollToSection('form-inputs')}>Form Inputs</Button>
            <Button onClick={() => scrollToSection('form-controls')}>Form Controls</Button>
            <Button onClick={() => scrollToSection('cards')}>Cards</Button>
            <Button onClick={() => scrollToSection('modal-notification')}>Modal & Notification</Button>
            <Button onClick={() => scrollToSection('tags-tooltips')}>Tags & Tooltips</Button>
            <Button onClick={() => scrollToSection('tabs-accordion')}>Tabs & Accordion</Button>
            <Button onClick={() => scrollToSection('list-pagination')}>List & Pagination</Button>
            <Button onClick={() => scrollToSection('table')}>Table</Button>
            <Button onClick={() => scrollToSection('menus')}>Menus</Button>
          </div>
        </div>
      </section>

      {/* Test Section - All Components */}
      <section className="test-section">
        <div className="container">
          <Heading level={2}>Test Section - All Components</Heading>
          <div className="test-grid">
            <Button>Button</Button>
            <Input placeholder="Input" />
            <Checkbox checked={checkboxChecked} onChange={setCheckboxChecked} label="Checkbox" />
            <Radio name="test" value="test" checked={true} onChange={() => {}} label="Radio" />
            <Toggle checked={toggleValue} onChange={setToggleValue} label="Toggle" />
            <Slider value={sliderValue} onChange={setSliderValue} />
            <ProgressBar value={progressValue} />
            <Badge>5</Badge>
            <Tag>Tag</Tag>
            <IconButton icon={<FaStar />} />
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section id="typography" className="component-section">
        <div className="container">
          <Heading level={2}>Typography</Heading>
          <Card elevation="medium" padding="large">
            <div className="typography-grid">
              <div>
                <Heading level={1}>Heading 1</Heading>
                <Heading level={2}>Heading 2</Heading>
                <Heading level={3}>Heading 3</Heading>
              </div>
              <div>
                <BodyText>Body text with normal weight and size.</BodyText>
                <BodyText>Caption text for smaller, secondary information.</BodyText>
                <BodyText>Overline text for labels and categories.</BodyText>
                <Link href="#">This is a link with hand-drawn underline</Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Buttons Section */}
      <section id="buttons" className="component-section">
        <div className="container">
          <Heading level={2}>Buttons</Heading>
          <Card elevation="medium" padding="large">
            <div className="button-grid">
              <div>
                <Heading level={3}>Button Variants</Heading>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div>
                <Heading level={3}>Button Sizes</Heading>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
              <div>
                <Heading level={3}>Button States</Heading>
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
              <div>
                <Heading level={3}>Icon Buttons</Heading>
                <IconButton icon={<FaStar />} />
                <IconButton icon={<FaHeart />} />
                <IconButton icon={<FaArrowRight />} />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Progress & Badges Section */}
      <section id="progress-badges" className="component-section">
        <div className="container">
          <Heading level={2}>Progress & Badges</Heading>
          <Card elevation="medium" padding="large">
            <div className="progress-grid">
              <div>
                <Heading level={3}>Progress Bar</Heading>
                <ProgressBar value={progressValue} />
                <Slider value={progressValue} onChange={setProgressValue} min={0} max={100} />
              </div>
              <div>
                <Heading level={3}>Badges</Heading>
                <Badge>5</Badge>
                <Badge>12</Badge>
                <Badge>99</Badge>
                <Badge>1000</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Dividers Section */}
      <section id="dividers" className="component-section">
        <div className="container">
          <Heading level={2}>Dividers</Heading>
          <Card elevation="medium" padding="large">
            <BodyText>Content above the divider</BodyText>
            <Divider />
            <BodyText>Content below the divider</BodyText>
            <Divider />
            <BodyText>More content with another divider</BodyText>
          </Card>
        </div>
      </section>

      {/* Date Picker Section */}
      <section id="date-picker" className="component-section">
        <div className="container">
          <Heading level={2}>Date Picker</Heading>
          <Card elevation="medium" padding="large">
            <div className="date-picker-grid">
            <DatePicker 
              value={selectedDate} 
              onChange={setSelectedDate}
              placeholder="Select a date"
            />
              {selectedDate && (
                <BodyText>Selected: {selectedDate.toLocaleDateString()}</BodyText>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Form Inputs Section */}
      <section id="form-inputs" className="component-section">
        <div className="container">
          <Heading level={2}>Form Inputs</Heading>
          <Card elevation="medium" padding="large">
            <div className="form-grid">
              <div>
                <Heading level={3}>Text Input</Heading>
                <Input 
                  value={inputValue} 
                  onChange={setInputValue} 
                  placeholder="Enter text..." 
                />
                <Input 
                  error="This field is required" 
                  placeholder="Error state" 
                />
                <Input 
                  disabled 
                  placeholder="Disabled input" 
                />
              </div>
              <div>
                <Heading level={3}>Text Area</Heading>
                <TextArea 
                  placeholder="Enter longer text..." 
                  rows={4}
                />
              </div>
              <div>
                <Heading level={3}>Select Input</Heading>
                <Select
                  value={selectValue}
                  onChange={setSelectValue}
                  placeholder="Choose an option"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3', disabled: true },
                    { value: 'option4', label: 'Option 4' }
                  ]}
                />
                <Select
                  placeholder="Select with error"
                  error="This field is required"
                  options={[
                    { value: 'a', label: 'Option A' },
                    { value: 'b', label: 'Option B' }
                  ]}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Form Controls Section */}
      <section id="form-controls" className="component-section">
        <div className="container">
          <Heading level={2}>Form Controls</Heading>
          <Card elevation="medium" padding="large">
            <div className="controls-grid">
              <div>
                <Heading level={3}>Checkbox</Heading>
                <Checkbox checked={checkboxChecked} onChange={setCheckboxChecked} label="Accept terms" />
                <Checkbox label="Subscribe to newsletter" />
              </div>
              <div>
                <Heading level={3}>Radio Buttons</Heading>
              <Radio 
                name="demo" 
                value="option1" 
                checked={radioValue === 'option1'} 
                onChange={(value) => setRadioValue(value as string)} 
                label="Option 1" 
              />
              <Radio 
                name="demo" 
                value="option2" 
                checked={radioValue === 'option2'} 
                onChange={(value) => setRadioValue(value as string)} 
                label="Option 2" 
              />
              </div>
              <div>
                <Heading level={3}>Toggle</Heading>
                <Toggle checked={toggleValue} onChange={setToggleValue} label="Enable notifications" />
              </div>
              <div>
                <Heading level={3}>Slider</Heading>
                <Slider value={sliderValue} onChange={setSliderValue} min={0} max={100} />
                <BodyText>Value: {sliderValue}</BodyText>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="component-section">
        <div className="container">
          <Heading level={2}>Cards</Heading>
          <Card elevation="medium" padding="large">
            <div className="card-grid">
              <Card elevation="low" padding="small">
                <Heading level={3}>Low Elevation</Heading>
                <BodyText>This card has low elevation and small padding.</BodyText>
              </Card>
              <Card elevation="medium" padding="medium">
                <Heading level={3}>Medium Elevation</Heading>
                <BodyText>This card has medium elevation and medium padding.</BodyText>
              </Card>
              <Card elevation="high" padding="large">
                <Heading level={3}>High Elevation</Heading>
                <BodyText>This card has high elevation and large padding.</BodyText>
              </Card>
            </div>
          </Card>
        </div>
      </section>

      {/* Modal & Notification Section */}
      <section id="modal-notification" className="component-section">
        <div className="container">
          <Heading level={2}>Modal & Notification</Heading>
          <Card elevation="medium" padding="large">
            <div className="modal-demo">
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Button onClick={() => setShowNotification(true)}>Show Notification</Button>
              
              <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                title="Example Modal"
              >
                <BodyText>This is an example modal with some content. You can close it by clicking the X button or clicking outside the modal.</BodyText>
                <div style={{ marginTop: '20px' }}>
                  <Button onClick={() => setIsModalOpen(false)}>Close</Button>
                </div>
              </Modal>

              {showNotification && (
                <Notification 
                  message="This is an example notification!" 
                  onClose={() => setShowNotification(false)}
                />
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Tags & Tooltips Section */}
      <section id="tags-tooltips" className="component-section">
        <div className="container">
          <Heading level={2}>Tags & Tooltips</Heading>
          <Card elevation="medium" padding="large">
            <div className="tags-demo">
              <Heading level={3}>Tags</Heading>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Tag>React</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Design System</Tag>
                <Tag>Hand-drawn</Tag>
              </div>
            </div>
            <div className="tooltips-demo">
              <Heading level={3}>Tooltips</Heading>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Tooltip content="This is a tooltip">
                  <Button>Hover me</Button>
                </Tooltip>
                <Tooltip content="Another tooltip with more text">
                  <Button>Hover me too</Button>
                </Tooltip>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tabs & Accordion Section */}
      <section id="tabs-accordion" className="component-section">
        <div className="container">
          <Heading level={2}>Tabs & Accordion</Heading>
          <Card elevation="medium" padding="large">
            <div className="tabs-demo">
              <Heading level={3}>Tabs</Heading>
              <Tabs defaultActiveTab={activeTab} onChange={(index) => setActiveTab(index)}>
                <TabItem label="Tab 1">
                  <BodyText>Content for the first tab. This can contain any React components.</BodyText>
                </TabItem>
                <TabItem label="Tab 2">
                  <BodyText>Content for the second tab. You can put forms, lists, or other components here.</BodyText>
                </TabItem>
                <TabItem label="Tab 3">
                  <BodyText>Content for the third tab. This demonstrates the tab switching functionality.</BodyText>
                </TabItem>
              </Tabs>
            </div>
            <div className="accordion-demo">
              <Heading level={3}>Accordion</Heading>
              <Accordion>
                <AccordionItem title="Section 1">
                  <BodyText>This is the content for the first accordion section. It can contain any React components.</BodyText>
                </AccordionItem>
                <AccordionItem title="Section 2">
                  <BodyText>This is the content for the second accordion section. You can put forms, lists, or other components here.</BodyText>
                </AccordionItem>
                <AccordionItem title="Section 3">
                  <BodyText>This is the content for the third accordion section. This demonstrates the accordion functionality.</BodyText>
                </AccordionItem>
              </Accordion>
            </div>
          </Card>
        </div>
      </section>

      {/* List & Pagination Section */}
      <section id="list-pagination" className="component-section">
        <div className="container">
          <Heading level={2}>List & Pagination</Heading>
          <Card elevation="medium" padding="large">
            <div className="list-demo">
              <Heading level={3}>List</Heading>
              <List>
                <ListItem title="First item in the list" />
                <ListItem title="Second item with some longer text" />
                <ListItem title="Third item" />
                <ListItem title="Fourth item with even more text to demonstrate wrapping" />
              </List>
            </div>
            <div className="pagination-demo">
              <Heading level={3}>Pagination</Heading>
              <Pagination 
                currentPage={currentPageNumber} 
                totalPages={10} 
                onPageChange={setCurrentPageNumber}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Table Section */}
      <section id="table" className="component-section">
        <div className="container">
          <Heading level={2}>Table</Heading>
          <Card elevation="medium" padding="large">
            <Table>
              <colgroup>
                <col style={{width: '30%'}} />
                <col style={{width: '40%'}} />
                <col style={{width: '30%'}} />
              </colgroup>
              <thead>
                <tr>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Role</TableHeader>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Developer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell>Designer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bob Johnson</TableCell>
                  <TableCell>bob@example.com</TableCell>
                  <TableCell>Manager</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Menus Section */}
      <section id="menus" className="component-section">
        <div className="container">
          <Heading level={2}>Menus</Heading>
          <Card elevation="medium" padding="large">
            <div className="menus-grid">
              <div>
                <Heading level={3}>Menu</Heading>
                <Menu 
                  selectedValue={selectedMenuValue}
                  onChange={handleMenuChange}
                >
                  <MenuItem value="edit">Edit</MenuItem>
                  <MenuItem value="copy">Copy</MenuItem>
                  <MenuItem value="delete">Delete</MenuItem>
                  <MenuItem disabled>Disabled Option</MenuItem>
                </Menu>
                <div style={{ marginTop: '10px', fontSize: '14px' }}>
                  Selected: {selectedMenuValue}
                </div>
              </div>
              <div>
                <Heading level={3}>Dropdown Menu</Heading>
                <DropdownMenu
                  trigger={<Button>Actions ▼</Button>}
                  placement="bottom-left"
                >
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="open">Open</MenuItem>
                  <MenuItem value="save">Save</MenuItem>
                  <MenuItem value="export">Export</MenuItem>
                </DropdownMenu>
              </div>
              <div>
                <Heading level={3}>Icon Button Dropdown</Heading>
                <DropdownMenu
                  trigger={<IconButton icon={<FaCog />} />}
                  placement="bottom-right"
                >
                  <MenuItem value="settings">Settings</MenuItem>
                  <MenuItem value="profile">Profile</MenuItem>
                  <MenuItem value="logout">Logout</MenuItem>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default App;
