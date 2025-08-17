import { useState } from 'react';
import { Button } from './components/button';
import { Input } from './components/input';
import { TextArea } from './components/textarea';
import { Checkbox } from './components/checkbox';
import { Radio } from './components/radio';
import { Toggle } from './components/toggle';
import { Slider } from './components/slider';
import { Card } from './components/card';
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

  return (
    <div className="app">
      <header className="app-header">
        <Heading level={1}>Paper Kit Design System</Heading>
        <BodyText>
          A hand-drawn, sketchy design system built with React and the Patrick Hand font.
        </BodyText>
      </header>

      <main className="app-main">
        {/* Typography Section */}
        <section className="component-section">
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
        <section className="component-section">
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
                <h3>Button States</h3>
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Form Inputs Section */}
        <section className="component-section">
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
