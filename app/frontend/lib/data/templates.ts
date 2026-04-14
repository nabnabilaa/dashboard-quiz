import { ComponentTemplate } from '@frontend/lib/types';
import { workshopModules } from './workshops';
import {
    Menu, User, Type, Star, BarChart3,
    MousePointer, Bell, Layout, Layers,
    List, Table, PenTool
} from 'lucide-react';

/**
 * Component Templates Data
 * Builder mode drag-and-drop components
 */
export const componentTemplates: Record<string, ComponentTemplate> = {
    navbar: {
        id: 'navbar',
        label: 'Navbar Menu',
        icon: Menu,
        color: 'blue',
        defaultCode: workshopModules[4].initialCode
    },
    header_avatar: {
        id: 'header_avatar',
        label: 'Profile Photo',
        icon: User,
        color: 'blue',
        defaultCode: workshopModules[0].initialCode
    },
    header_text: {
        id: 'header_text',
        label: 'Name & Title',
        icon: Type,
        color: 'blue',
        defaultCode: workshopModules[1].initialCode
    },
    skills: {
        id: 'skills',
        label: 'Badge Skills',
        icon: Star,
        color: 'yellow',
        defaultCode: workshopModules[2].initialCode
    },
    progress: {
        id: 'progress',
        label: 'Progress Bar',
        icon: BarChart3,
        color: 'green',
        defaultCode: workshopModules[5].initialCode
    },
    actions: {
        id: 'actions',
        label: 'Action Buttons',
        icon: MousePointer,
        color: 'purple',
        defaultCode: workshopModules[3].initialCode
    },
    alert: {
        id: 'alert',
        label: 'Contact Alert',
        icon: Bell,
        color: 'red',
        defaultCode: workshopModules[6].initialCode
    },
    card_container: {
        id: 'card_container',
        label: 'Biodata Card',
        icon: Layout,
        color: 'gray',
        defaultCode: workshopModules[7].initialCode
    },
    divider: {
        id: 'divider',
        label: 'Separator Line',
        icon: Layers,
        color: 'gray',
        defaultCode: '<hr class="my-4 border-2">'
    },
    text_paragraph: {
        id: 'text_paragraph',
        label: 'Text Paragraph',
        icon: Type,
        color: 'gray',
        defaultCode: '<p class="text-center text-muted">Write your self-description here at length.</p>'
    },
    list_group: {
        id: 'list_group',
        label: 'List Item',
        icon: List,
        color: 'green',
        defaultCode: `<ul class="list-group shadow-sm">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`
    },
    simple_table: {
        id: 'simple_table',
        label: 'Data Table',
        icon: Table,
        color: 'indigo',
        defaultCode: `<table class="table table-bordered table-striped mt-3">
  <thead class="table-dark">
    <tr><th>#</th><th>Name</th><th>Role</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Adi</td><td>Admin</td></tr>
    <tr><td>2</td><td>Budi</td><td>User</td></tr>
  </tbody>
</table>`
    },
    form_input: {
        id: 'form_input',
        label: 'Form',
        icon: PenTool,
        color: 'red',
        defaultCode: `<div class="mb-3 text-start">
  <label class="form-label">Email address</label>
  <input type="email" class="form-control" placeholder="name@example.com">
  <button class="btn btn-primary mt-2">Subscribe</button>
</div>`
    }
};
