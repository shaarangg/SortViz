# SortViz

A small React app that visualizes common sorting algorithms and their performance.

## Demo

Run the app locally to see array sorting visualizations and compare algorithms.

## Features

- Visualizations for Bubble Sort, Merge Sort, Quick Sort, and Selection Sort
- Adjustable array size and speed controls
- Step-by-step animation to observe comparisons and swaps

## Prerequisites

- Node.js (v14+ recommended)
- npm (comes with Node)

## Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd SortViz
npm install
```

## Running Locally

Start the development server:

```bash
npm start
```

Open http://localhost:3000 in your browser. The app hot-reloads during development.

## Available Scripts

- `npm start` - run the app in development mode
- `npm run build` - build the app for production
- `npm test` - run tests (if present)

If your project has additional scripts in `package.json`, use those as applicable.

## Project Structure

Key files and folders:

- `public/` - static files and `index.html`
- `src/` - React source files
    - `App.js` - main app component
    - `context.js` - app-wide state/context
    - `helper.js` - utility helpers
    - `Components/` - UI components (e.g., `Navbar.js`, `Bar.js`)
    - `Sorting-Algorithms/` - algorithm implementations (`BubbleSort.js`, `MergeSort.js`, `QuickSort.js`, `SelectionSort.js`)

Adjust paths above if your project structure differs.

## How to Use

- Use the controls in the navbar to generate a new array, select an algorithm, and start visualization.
- Change the array size and animation speed to observe different behaviors.
- Pause or step through animations (if controls are provided) to inspect intermediate states.

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a pull request describing your changes

Please follow existing code style and add or update tests where appropriate.

## License

This project is provided under the MIT License. Change or specify a different license as needed.

## Contact

For questions or feedback, open an issue in the repository or contact the maintainers.

---

If you'd like, I can also:

- Add a short GIF or screenshot to the README
- Detect `package.json` scripts and list them automatically
- Add a `CONTRIBUTING.md` template

Tell me which of these you'd like next.
