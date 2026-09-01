import { Building2, MessagesSquare, ShoppingBag, GraduationCap, Users } from 'lucide-react';

export const solutionsData = [
  {
    title: 'Construction Operations',
    description: 'Coordinate multiple sites, material movement, workforce records, petty expenses and vendor payments from a shared operational view.',
    icon: Building2,
    image: '/images/solution_construction.png',
    features: ['Multi-site Coordination', 'Workforce & Expense Tracking', 'Vendor Management'],
    targetUser: 'Site Managers & Operations Directors',
    href: '/construction-software-mobileapp'
  },
  {
    title: 'Complaint Management',
    description: 'Capture customer issues, categorize and prioritize complaints, track resolution and keep customers informed through structured notifications.',
    icon: MessagesSquare,
    image: '/images/solution_complaint.png',
    features: ['Structured Ticketing', 'Priority Routing', 'Automated Notifications'],
    targetUser: 'Customer Support & Success Teams',
    href: '/complaint-management-software'
  },
  {
    title: 'Distributor-Retailer Order Management',
    description: 'Centralize order intake, inventory visibility, fulfillment status, shipping/returns workflows and connected reporting.',
    icon: ShoppingBag,
    image: '/images/solution_order.png',
    features: ['Centralized Order Intake', 'Inventory Visibility', 'Fulfillment Workflows'],
    targetUser: 'Supply Chain & Sales Operations',
    href: '/order-management-system'
  },
  {
    title: 'School Management',
    description: 'Admissions, attendance, academic records, fees, communications and parent/teacher workflows.',
    icon: GraduationCap,
    image: '/images/solution_school.png',
    features: ['Admissions & Fees', 'Academic Records', 'Parent-Teacher Communication'],
    targetUser: 'School Administrators & Teachers',
    conditional: true, // Display conditionally based on the spec
    href: '/school-management-software'
  },
  {
    title: 'Engagement Models',
    description: 'A well-structured software engagement makes ownership, priorities, communication and cost easier to manage.',
    icon: Users,
    image: '/images/solution_engagement.png',
    features: ['Defined Scope', 'Dedicated Team', 'Time & Materials'],
    targetUser: 'Product Owners & Business Leaders',
    href: '/engagement-models'
  }
];
