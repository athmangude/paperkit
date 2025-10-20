import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaEllipsisV, FaCheck, FaInfo, FaExclamationTriangle, FaUser, FaEnvelope, FaCalendarAlt, FaHeart, FaShare, FaComment } from 'react-icons/fa';
import {
  Button,
  Card,
  Heading,
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
  Hero
} from '../components/index';
import './Showcase.css';

const Showcase: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false,
    gender: 'male',
    notifications: true,
    age: 25,
    birthDate: null as Date | null
  });
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error' | 'warning' | 'info'>('info');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotificationType('success');
    setShowNotification(true);
  };

  const socialPosts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: '👩',
      time: '2 hours ago',
      content: 'Just finished implementing the new Paper Kit design system! The components are so clean and easy to use. 🎨✨',
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: '👨',
      time: '4 hours ago',
      content: 'Working on a new dashboard using Paper Kit. The table and card components are perfect for data visualization.',
      likes: 18,
      comments: 5,
      shares: 2
    },
    {
      id: 3,
      author: 'Emily Davis',
      avatar: '👩‍💻',
      time: '6 hours ago',
      content: 'The form components in Paper Kit are incredibly intuitive. Built a complex registration form in minutes!',
      likes: 31,
      comments: 12,
      shares: 7
    }
  ];

  const dashboardStats = [
    { label: 'Total Users', value: '12,543', change: '+12%', trend: 'up' },
    { label: 'Revenue', value: '$45,231', change: '+8%', trend: 'up' },
    { label: 'Orders', value: '1,234', change: '-3%', trend: 'down' },
    { label: 'Conversion', value: '3.2%', change: '+1.5%', trend: 'up' }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', product: 'Premium Plan', amount: '$99', status: 'completed' },
    { id: '#1235', customer: 'Jane Smith', product: 'Basic Plan', amount: '$29', status: 'pending' },
    { id: '#1236', customer: 'Bob Johnson', product: 'Pro Plan', amount: '$199', status: 'processing' },
    { id: '#1237', customer: 'Alice Brown', product: 'Enterprise', amount: '$499', status: 'completed' }
  ];

  return (
    <div className="showcase">
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

      {/* Hero Section */}
      <Hero>
        <Heading level={2}>Comprehensive Design System Showcase</Heading>
        <BodyText>
          Explore real-world applications of Paper Kit components through interactive examples 
          including forms, social media feeds, user profiles, and dashboard interfaces.
        </BodyText>
        <div className="hero-actions">
          <Button variant="primary" size="large" onClick={() => setShowModal(true)}>
            Get Started
          </Button>
          <Button variant="outline" size="large">
            View Documentation
          </Button>
        </div>
      </Hero>

      {/* Main Showcase Content */}
      <section className="showcase-content">
        <div className="container">
          {/* Dashboard Section */}
          <div className="showcase-section">
            <Heading level={2}>Dashboard Interface</Heading>
            <BodyText>Real-world dashboard with statistics, tables, and data visualization components.</BodyText>
              <div className="dashboard-grid">
                {/* Stats Cards */}
                <div className="stats-grid">
                  {dashboardStats.map((stat, index) => (
                    <Card key={index} elevation="medium" padding="medium" className="stat-card">
                      <div className="stat-content">
                        <BodyText className="stat-label">{stat.label}</BodyText>
                        <Heading level={3} className="stat-value">{stat.value}</Heading>
                        <div className={`stat-change ${stat.trend}`}>
                          <Badge variant={stat.trend === 'up' ? 'success' : 'error'} size="large">
                            {stat.change}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Recent Orders Table */}
                <Card elevation="medium" padding="large" className="orders-card">
                  <Heading level={3}>Recent Orders</Heading>
                  <Table>
                    <thead>
                      <tr>
                        <TableHeader>Order ID</TableHeader>
                        <TableHeader>Customer</TableHeader>
                        <TableHeader>Product</TableHeader>
                        <TableHeader>Amount</TableHeader>
                        <TableHeader>Status</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.product}</TableCell>
                          <TableCell>{order.amount}</TableCell>
                          <TableCell>
                            <Tag 
                              variant={order.status === 'completed' ? 'success' : 
                                      order.status === 'pending' ? 'warning' : 'default'}
                            >
                              {order.status}
                            </Tag>
                          </TableCell>
                        </TableRow>
                      ))}
                    </tbody>
                  </Table>
                </Card>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="showcase-section">
              <Heading level={2}>Contact Form</Heading>
              <BodyText>Comprehensive form showcasing various input components and validation states.</BodyText>
              <Card elevation="medium" padding="large" className="form-card">
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <div className="form-label-with-icon">
                        <FaUser style={{ marginRight: '8px' }} />
                        <BodyText>Full Name</BodyText>
                      </div>
                      <Input
                        value={formData.name}
                        onChange={(value) => handleInputChange('name', value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <div className="form-label-with-icon">
                        <FaEnvelope style={{ marginRight: '8px' }} />
                        <BodyText>Email Address</BodyText>
                      </div>
                      <Input
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>

                    <div className="form-group">
                      <BodyText>Gender</BodyText>
                      <div className="radio-group">
                        <Radio
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={(value) => handleInputChange('gender', value)}
                          label="Male"
                        />
                        <Radio
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={(value) => handleInputChange('gender', value)}
                          label="Female"
                        />
                        <Radio
                          name="gender"
                          value="other"
                          checked={formData.gender === 'other'}
                          onChange={(value) => handleInputChange('gender', value)}
                          label="Other"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-label-with-icon">
                        <FaCalendarAlt style={{ marginRight: '8px' }} />
                        <BodyText>Birth Date</BodyText>
                      </div>
                      <DatePicker
                        value={formData.birthDate}
                        onChange={(date) => handleInputChange('birthDate', date)}
                        placeholder="Select your birth date"
                      />
                    </div>

                    <div className="form-group">
                      <BodyText>Age: {formData.age}</BodyText>
                      <Slider
                        value={formData.age}
                        onChange={(value) => handleInputChange('age', value)}
                        min={18}
                        max={100}
                      />
                    </div>

                    <div className="form-group full-width">
                      <BodyText>Message</BodyText>
                      <TextArea
                        value={formData.message}
                        onChange={(value) => handleInputChange('message', value)}
                        placeholder="Tell us about your project..."
                        rows={4}
                      />
                    </div>

                    <div className="form-group">
                      <Checkbox
                        checked={formData.newsletter}
                        onChange={(checked) => handleInputChange('newsletter', checked)}
                        label="Subscribe to newsletter"
                      />
                    </div>

                    <div className="form-group">
                      <Toggle
                        checked={formData.notifications}
                        onChange={(checked) => handleInputChange('notifications', checked)}
                        label="Enable notifications"
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <Button type="submit" variant="primary" size="large">
                      Submit Form
                    </Button>
                    <Button type="button" variant="outline" size="large">
                      Reset
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Social Feed Section */}
            <div className="showcase-section">
              <Heading level={2}>Social Media Feed</Heading>
              <BodyText>Social media interface demonstrating card layouts, user interactions, and content organization.</BodyText>
              <div className="social-feed">
                {socialPosts.map((post) => (
                  <Card key={post.id} elevation="medium" padding="large" className="post-card">
                    <div className="post-header">
                      <div className="post-author">
                        <div className="avatar">{post.avatar}</div>
                        <div className="author-info">
                          <BodyText className="author-name">{post.author}</BodyText>
                          <BodyText className="post-time">{post.time}</BodyText>
                        </div>
                      </div>
                      <IconButton icon={<FaEllipsisV />} variant="outline" size="small" />
                    </div>
                    
                    <div className="post-content">
                      <BodyText>{post.content}</BodyText>
                    </div>
                    
                    <Divider />
                    
                    <div className="post-actions">
                      <Button variant="outline" size="small">
                        <FaHeart style={{ marginRight: '4px' }} />
                        {post.likes}
                      </Button>
                      <Button variant="outline" size="small">
                        <FaComment style={{ marginRight: '4px' }} />
                        {post.comments}
                      </Button>
                      <Button variant="outline" size="small">
                        <FaShare style={{ marginRight: '4px' }} />
                        {post.shares}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* User Profile Section */}
            <div className="showcase-section">
              <Heading level={2}>User Profile</Heading>
              <BodyText>User profile interface showcasing personal information, activity feeds, and social stats.</BodyText>
              <div className="profile-layout">
                <Card elevation="medium" padding="large" className="profile-card">
                  <div className="profile-header">
                    <div className="profile-avatar">
                      <FaUser size={24} />
                    </div>
                    <div className="profile-info">
                      <Heading level={3}>John Doe</Heading>
                      <BodyText>Software Engineer</BodyText>
                      <div className="profile-tags">
                        <Tag>React</Tag>
                        <Tag>TypeScript</Tag>
                        <Tag>Design Systems</Tag>
                      </div>
                    </div>
                    <Button variant="outline">Edit Profile</Button>
                  </div>
                  
                  <Divider />
                  
                  <div className="profile-stats">
                    <div className="stat">
                      <Heading level={3}>1,234</Heading>
                      <BodyText>Followers</BodyText>
                    </div>
                    <div className="stat">
                      <Heading level={3}>567</Heading>
                      <BodyText>Following</BodyText>
                    </div>
                    <div className="stat">
                      <Heading level={3}>89</Heading>
                      <BodyText>Projects</BodyText>
                    </div>
                  </div>
                </Card>

                <Card elevation="medium" padding="large" className="activity-card">
                  <Heading level={3}>Recent Activity</Heading>
                  <List>
                    <ListItem>
                      <div className="activity-item">
                        <IconButton icon={<FaCheck />} size="small" />
                        <BodyText>Completed project "Protokit Design System"</BodyText>
                      </div>
                    </ListItem>
                    <ListItem>
                      <div className="activity-item">
                        <IconButton icon={<FaInfo />} size="small" />
                        <BodyText>Updated profile information</BodyText>
                      </div>
                    </ListItem>
                    <ListItem>
                      <div className="activity-item">
                        <IconButton icon={<FaExclamationTriangle />} size="small" />
                        <BodyText>Received new collaboration request</BodyText>
                      </div>
                    </ListItem>
                  </List>
                </Card>
              </div>
            </div>

            {/* Interactive Components Section */}
            <div className="showcase-section">
              <Heading level={2}>Interactive Components</Heading>
              <BodyText>Advanced components demonstrating tabs, accordions, progress bars, and interactive elements.</BodyText>
              <div className="interactive-grid">
                <Card elevation="medium" padding="large">
                  <Heading level={3}>Tabs Example</Heading>
                  <Tabs defaultActiveTab={activeTab} onChange={(index) => setActiveTab(index)}>
                    <TabItem label="Overview">
                      <BodyText>This is the overview tab content.</BodyText>
                    </TabItem>
                    <TabItem label="Settings">
                      <BodyText>This is the settings tab content.</BodyText>
                    </TabItem>
                    <TabItem label="Analytics">
                      <BodyText>This is the analytics tab content.</BodyText>
                    </TabItem>
                  </Tabs>
                </Card>

                <Card elevation="medium" padding="large">
                  <Heading level={3}>Accordion Example</Heading>
                  <Accordion>
                    <AccordionItem title="What is Paper Kit?">
                      <BodyText>Paper Kit is a comprehensive design system built with React and TypeScript.</BodyText>
                    </AccordionItem>
                    <AccordionItem title="How do I get started?">
                      <BodyText>Simply install the package and import the components you need.</BodyText>
                    </AccordionItem>
                    <AccordionItem title="Is it free to use?">
                      <BodyText>Yes, Paper Kit is completely free and open source.</BodyText>
                    </AccordionItem>
                  </Accordion>
                </Card>

                <Card elevation="medium" padding="large">
                  <Heading level={3}>Progress & Pagination</Heading>
                  <div className="progress-section">
                    <BodyText>Project Progress</BodyText>
                    <ProgressBar value={75} showLabel variant="success" />
                  </div>
                  <Divider />
                  <div className="pagination-section">
                    <BodyText>Page Navigation</BodyText>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={10}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </Card>

                <Card elevation="medium" padding="large">
                  <Heading level={3}>Tooltips & Tags</Heading>
                  <div className="tooltip-demo">
                    <Tooltip content="This is a helpful tooltip">
                      <Button>Hover for tooltip</Button>
                    </Tooltip>
                  </div>
                  <Divider />
                  <div className="tags-demo">
                    <BodyText>Available Tags:</BodyText>
                    <div className="tags-list">
                      <Tag variant="default">Default</Tag>
                      <Tag variant="success">Success</Tag>
                      <Tag variant="warning">Warning</Tag>
                      <Tag variant="error">Error</Tag>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome to Paper Kit"
        size="large"
      >
        <BodyText>
          Thank you for exploring Paper Kit! This comprehensive design system provides
          all the components you need to build beautiful, consistent user interfaces.
        </BodyText>
        <div className="modal-actions">
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Get Started
          </Button>
          <Button variant="outline" onClick={() => setShowModal(false)}>
            Learn More
          </Button>
        </div>
      </Modal>

      {/* Notification */}
      {showNotification && (
        <Notification
          message="Form submitted successfully!"
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default Showcase;
