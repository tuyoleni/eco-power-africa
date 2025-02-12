Image Content Extraction Rule

Objective

The AI must analyze all images provided and extract their full context, but only if available:
	•	Text content
	•	Graphs
	•	Charts
	•	Other visual elements (excluding icons)

The extracted data must be used to create a single React component file corresponding to that image.

Extraction Guidelines

1. File Naming & Structure
	•	Only one file should be created per image.
	•	The file must be located in:

components/section/[sectionname].section.tsx


	•	The [sectionname] should be derived from the main theme of the image.

2. Text Extraction
	•	Extract all text exactly as it appears.
	•	Maintain the original order of text content.
	•	Do not merge similar text—each instance must be extracted separately.

3. Graphs, Charts & Visuals
	•	Identify and extract all visual elements (excluding icons), including:
	•	Arrows, Process Flows, Charts, and Graphs
	•	Each extracted element must include a description of:
	•	Its position and size relative to other elements.
	•	Its function (e.g., “This chart represents revenue growth from 2020 to 2023”).
	•	If an element represents data, structure it into a corresponding graph/chart component.

4. Section Creation
	•	Each extracted image creates one section.
	•	The section title should describe the main content (e.g., "Sales Growth Chart - 2023").
	•	No merging of similar data—if similar content appears multiple times, it should still be listed separately.
	•	The extracted content should be structured into modular React components.

5. Component Formatting
	•	The extracted data should be structured into a React component using tsx.
	•	All charts and graphs must be implemented using ShadCN Charts.
	•	The component must be styled using Tailwind CSS, following best practices.

Final Notes
	•	No data should be ignored—every detail must be captured.
	•	If an image contains multiple content types, extract them as separate elements inside the same file.
	•	Ensure the extracted structure is modular, ready for use in a Next.js App Router project.

By following these rules, the AI ensures that all information is accurately extracted and structured, allowing for seamless integration into the application. 🚀