# am-toggle-dropdown

**am-toggle-dropdown** is a lightweight, easy-to-use JavaScript utility for toggling the visibility of dropdown menus based on user interactions. It provides a simple way to manage dropdown menus with either click or mouseover events.

## Features

- **Simple API**: Just pass your menu element, button element, and the interaction type.
- **Lightweight**: Minimal code to include in your project.
- **Flexible**: Works with both click and mouseover events.
- **No Dependencies**: Vanilla JavaScript, no need for external libraries.

## Installation

Install the package via npm:

```bash
npm install am-toggle-dropdown
```

## Usage

```
import toggleDropdown from 'am-toggle-dropdown';

// Select your elements
const menu = document.getElementById('myMenu');
const dropdownButton = document.getElementById('myDropdownButton');

// Initialize the dropdown with the desired interaction type
toggleDropdown(menu, dropdownButton, 'click'); // or 'mouseover'

```
