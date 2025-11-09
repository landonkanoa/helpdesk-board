export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Outlook app on iPhone not receiving new emails since yesterday.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Jordan',
      updatedAt: '2025-10-30T12:00:00Z'
    },
    {
      id: 't-1003',
      title: 'Laptop battery drains quickly',
      description: 'Battery only lasts 2 hours on Dell XPS 15 after full charge.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-29T12:30:00Z'
    },
    {
      id: 't-1004',
      title: 'OKTA MFA prompts repeatedly',
      description: 'User gets multiple MFA prompts when trying to access email.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'Frank',
      updatedAt: '2025-10-28T09:21:00Z'
    },
    {
      id: 't-1005',
      title: 'Printer not responding on Floor 3',
      description: 'HP LaserJet on third floor not accepting print jobs.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T07:00:00Z'
    },
    {
      id: 't-1006',
      title: 'Teams screen share fails',
      description: 'Cannot share screen during Teams meetings, shows black screen.',
      priority: 'High',
      status: 'Open',
      assignee: 'Alex',
      updatedAt: '2025-10-30T06:00:00Z'
    },
    {
      id: 't-1007',
      title: 'New hire account provisioning',
      description: 'Need accounts created for new developer starting next week.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Morgan',
      updatedAt: '2025-10-31T04:45:00Z'
    },
    {
      id: 't-1008',
      title: 'Wi-Fi drops in Conference Room A',
      description: 'Intermittent Wi-Fi disconnections during large meetings.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:15:00Z'
    },
    {
      id: 't-1009',
      title: 'Locked out of Salesforce',
      description: 'User cannot complete MFA push, emergency access needed.',
      priority: 'High',
      status: 'Resolved',
      assignee: 'Sam',
      updatedAt: '2025-10-29T10:05:00Z'
    },
    {
      id: 't-1010',
      title: 'Zoom audio echoes',
      description: 'Audio echo reported by multiple attendees in all meetings.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-27T06:30:00Z'
    },
    {
      id: 't-1011',
      title: 'Shared drive permissions',
      description: 'Access denied for new project members on G: drive.',
      priority: 'Medium',
      status: 'On Hold',
      assignee: 'Priya',
      updatedAt: '2025-10-30T01:45:00Z'
    },
    {
      id: 't-1012',
      title: 'Slack notifications delayed',
      description: 'Messages notify several minutes late on desktop app.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T03:55:00Z'
    },
    {
      id: 't-1013',
      title: 'MacOS update failing',
      description: 'MacBook Pro stuck at 80% during Sonoma update.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Jordan',
      updatedAt: '2025-10-31T03:40:00Z'
    },
    {
      id: 't-1014',
      title: 'SFTP key rotation',
      description: 'Quarterly rotation needed for production SFTP keys.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Sam',
      updatedAt: '2025-10-31T08:00:00Z'
    },
    {
      id: 't-1015',
      title: 'Calendar invites not delivered',
      description: 'External participants not receiving Outlook invitations.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:25:00Z'
    }
  ];
  
  return Response.json(tickets);
}