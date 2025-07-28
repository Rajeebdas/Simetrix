# Website Editing Guide

This guide shows you exactly where to edit text, images, and content on your Simetric website.

## 📁 Main Content Locations

### 1. Home Page (`client/src/pages/home.tsx`)
- **Hero section text**: Main headline, subtitle, description
- **Services overview**: Service cards and descriptions
- **Why choose us**: Features and benefits
- **Testimonials**: Customer reviews (static data)

### 2. About Page (`client/src/pages/about.tsx`)
- **Company story**: Mission, vision, values
- **Team information**: Team member descriptions
- **Company statistics**: Numbers and achievements

### 3. Services Page (`client/src/pages/services.tsx`)
- **Service descriptions**: FEA, CAD modeling, weight optimization
- **Process explanations**: How services work
- **Technology details**: Tools and methodologies

### 4. Industries Page (`client/src/pages/industries.tsx`)
- **Industry descriptions**: Commercial vehicles, machinery, etc.
- **Industry-specific benefits**: Tailored value propositions
- **Case study previews**: Industry examples

### 5. Case Studies Page (`client/src/pages/case-studies.tsx`)
- **Project descriptions**: Detailed case studies
- **Results and outcomes**: Achievements and improvements
- **Client testimonials**: Project-specific feedback

### 6. Contact Page (`client/src/pages/contact.tsx`)
- **Contact information**: Email, phone, address
- **Contact form**: Form fields and messages
- **Business hours**: Availability information

## 🎨 Static Data (`client/src/data/static-data.ts`)
This file contains all reusable content like:
- **Testimonials**: Customer reviews and ratings
- **Case studies**: Project details and outcomes
- **Service features**: Capabilities and benefits
- **Company statistics**: Numbers and metrics

## 🖼️ Images and Assets

### Current Image Locations:
- **Attached assets**: `attached_assets/` folder
- **Import path**: Use `@assets/filename.ext` in code

### To Add New Images:
1. Upload images to the `attached_assets/` folder
2. Reference them in code using: `import imageName from "@assets/your-image.jpg"`
3. Use in components: `<img src={imageName} alt="description" />`

## 🎨 Styling and Colors (`client/src/index.css`)
- **Brand colors**: Primary blue, secondary colors
- **Typography**: Font sizes, weights, line heights
- **Animation classes**: Fade-in, slide-in effects
- **Custom CSS**: Global styles and utilities

## 📱 Layout Components

### Header (`client/src/components/layout/header.tsx`)
- **Company name**: "Simetric"
- **Tagline**: "Engineering insight through simulation"
- **Navigation menu**: Page links

### Footer (`client/src/components/layout/footer.tsx`)
- **Company information**: Address, contact details
- **Links**: Quick navigation
- **Social media**: LinkedIn and other profiles

## 🔧 How to Edit Content

### Editing Text:
1. Find the page file (e.g., `home.tsx`, `about.tsx`)
2. Look for text in quotes like: `"Your text here"`
3. Replace with your new text
4. Save the file - changes appear automatically

### Editing Images:
1. Add your image to `attached_assets/` folder
2. In the component file, add: `import myImage from "@assets/my-image.jpg"`
3. Replace existing image source: `<img src={myImage} alt="description" />`

### Editing Static Data:
1. Open `client/src/data/static-data.ts`
2. Find the section you want to edit (testimonials, case studies, etc.)
3. Modify the text, add/remove items
4. Save the file

## 📝 Example Text Changes

### Change Homepage Hero Text:
**File**: `client/src/pages/home.tsx`
**Look for**: The main headline in the hero section
**Change**: Replace text between quotes

### Change Company Information:
**File**: `client/src/pages/about.tsx`
**Look for**: Company description and mission statement
**Change**: Update text content

### Change Service Descriptions:
**File**: `client/src/pages/services.tsx`
**Look for**: Service cards and detailed descriptions
**Change**: Modify service titles and descriptions

## 🚀 Quick Tips

1. **Auto-reload**: Changes appear automatically when you save files
2. **Text in quotes**: Look for text between `"quotes"` or `'quotes'`
3. **Static data**: Use `static-data.ts` for content that appears in multiple places
4. **Images**: Always add alt text for accessibility
5. **Backup**: Test changes on development before major edits

## 📞 Need Help?
- All text is in the page files (`pages/` folder)
- Images go in `attached_assets/` folder
- Reusable content is in `static-data.ts`
- Styles and colors are in `index.css`