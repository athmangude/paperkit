# Protokit UI

A comprehensive React component library with a hand-drawn design system. Features 30+ beautiful, accessible components built with TypeScript for modern React applications.

## 🎨 Design Philosophy

Protokit UI embraces a hand-drawn aesthetic that brings warmth and personality to your applications. Each component is carefully crafted with attention to detail, accessibility, and developer experience.

## ✨ Features

- **30+ Components**: Buttons, forms, navigation, data display, and layout components
- **TypeScript Support**: Full type definitions included
- **Accessible**: Built with accessibility in mind
- **Customizable**: Easy to theme and customize
- **Modern React**: Compatible with React 18+
- **Hand-drawn Design**: Unique visual style that stands out

## 📦 Installation

```bash
npm install protokit-ui
```

## 🚀 Quick Start

```tsx
import React from 'react';
import { Button, Card, Input } from 'protokit-ui';

function App() {
  return (
    <div>
      <Card>
        <h2>Welcome to Protokit UI</h2>
        <Input placeholder="Enter your name" />
        <Button>Get Started</Button>
      </Card>
    </div>
  );
}

export default App;
```

## 🧩 Components

### Form Components
- **Button** - Primary, secondary, and icon buttons
- **Input** - Text input with validation states
- **TextArea** - Multi-line text input
- **Checkbox** - Checkbox with custom styling
- **Radio** - Radio button groups
- **Toggle** - Switch/toggle component
- **Slider** - Range slider input
- **DatePicker** - Date selection component
- **Select** - Dropdown selection
- **ProgressBar** - Progress indication

### Display Components
- **Card** - Content container with elevation
- **Badge** - Status and notification badges
- **Tag** - Categorization tags
- **Divider** - Visual separation
- **Table** - Data tables with sorting
- **List** - Structured lists
- **Typography** - Text styling components

### Navigation Components
- **NavigationBar** - Main navigation
- **Menu** - Context and dropdown menus
- **Tabs** - Tabbed content organization
- **Pagination** - Page navigation
- **Breadcrumb** - Navigation breadcrumbs

### Feedback Components
- **Modal** - Overlay dialogs
- **Notification** - Toast notifications
- **Tooltip** - Contextual help
- **Accordion** - Collapsible content

### Layout Components
- **Header** - Page headers
- **Hero** - Landing page sections
- **Grid** - Layout grid system

## 🎯 Usage Examples

### Form with Validation
```tsx
import { Input, Button, Card } from 'protokit-ui';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>
        Sign In
      </Button>
    </Card>
  );
}
```

### Data Display
```tsx
import { Table, Badge, Tag } from 'protokit-ui';

function UserTable({ users }) {
  return (
    <Table
      data={users}
      columns={[
        { key: 'name', title: 'Name' },
        { key: 'email', title: 'Email' },
        { 
          key: 'status', 
          title: 'Status',
          render: (status) => <Badge type={status}>{status}</Badge>
        },
        {
          key: 'tags',
          title: 'Tags',
          render: (tags) => tags.map(tag => <Tag key={tag}>{tag}</Tag>)
        }
      ]}
    />
  );
}
```

### Navigation
```tsx
import { NavigationBar, Menu, Tabs } from 'protokit-ui';

function AppLayout() {
  return (
    <div>
      <NavigationBar
        brand="My App"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'About', href: '/about' }
        ]}
      />
      
      <Tabs>
        <Tabs.Tab label="Overview">Overview content</Tabs.Tab>
        <Tabs.Tab label="Details">Details content</Tabs.Tab>
        <Tabs.Tab label="Settings">Settings content</Tabs.Tab>
      </Tabs>
    </div>
  );
}
```

## 🎨 Theming

Protokit UI components use CSS custom properties for easy theming:

```css
:root {
  --protokit-primary: #007bff;
  --protokit-secondary: #6c757d;
  --protokit-success: #28a745;
  --protokit-warning: #ffc107;
  --protokit-danger: #dc3545;
  --protokit-border-radius: 8px;
  --protokit-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## 📚 Documentation

- **Full Documentation**: [https://athmangude.github.io/protokit-ui/](https://athmangude.github.io/protokit-ui/)
- **Component Showcase**: [https://athmangude.github.io/protokit-ui/showcase](https://athmangude.github.io/protokit-ui/showcase)
- **API Reference**: [https://athmangude.github.io/protokit-ui/documentation](https://athmangude.github.io/protokit-ui/documentation)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/athmangude/protokit-ui/blob/main/CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](https://github.com/athmangude/protokit-ui/blob/main/LICENSE) for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- TypeScript team for excellent type support
- Open source community for inspiration and tools

---

**Made with ❤️ by the Protokit Team**

[GitHub](https://github.com/athmangude/protokit-ui) • [Documentation](https://athmangude.github.io/protokit-ui/) • [Issues](https://github.com/athmangude/protokit-ui/issues)