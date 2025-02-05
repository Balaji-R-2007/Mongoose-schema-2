# **Blog Application - MongoDB Schema**

## **Overview**
This project involves designing a MongoDB schema for a blog application. The schema enables creating, storing, and managing blog posts and comments while ensuring data validation and efficient queries.

---

## **Requirements**

### **1. Blog Posts**
Each blog post includes the following fields:

- **Title**  
  - **Type**: `String`  
  - **Requirements**:  
    - Must be unique.  
    - Minimum length: 5 characters.  
  - **Description**: Serves as the title of the blog post.

- **Content**  
  - **Type**: `String`  
  - **Requirements**:  
    - Required.  
    - Minimum length: 50 characters.  
  - **Description**: The main content of the blog post.

- **Author**  
  - **Type**: `String`  
  - **Description**: Username of the author.

- **Tags**  
  - **Type**: `Array of Strings`  
  - **Description**: Optional field for storing tags or keywords related to the post, e.g., `['tech', 'coding']`.

- **Category**  
  - **Type**: `String`  
  - **Default**: `"General"`  
  - **Description**: Indicates the post category.

- **Likes**  
  - **Type**: `Array of Strings`  
  - **Description**: Stores usernames of users who liked the post.

- **Created At**  
  - **Type**: `Date`  
  - **Default**: Current timestamp  
  - **Description**: Automatically records the post creation time.

- **Updated At**  
  - **Type**: `Date`  
  - **Description**: Automatically updated on modifications.

---

### **2. Comments**
Each blog post can have multiple comments stored as subdocuments:

- **Username**  
  - **Type**: `String`  
  - **Description**: Username of the commenter.

- **Message**  
  - **Type**: `String`  
  - **Requirements**:  
    - Required.  
  - **Description**: The comment text.

- **Commented At**  
  - **Type**: `Date`  
  - **Default**: Current timestamp  
  - **Description**: Automatically records the comment creation time.

---

## **Schema Implementation Goals**

- **Validation Rules**  
  - Titles must be unique and have a minimum length of 5 characters.  
  - Content must have a minimum length of 50 characters.

- **Relationships**  
  - Comments are embedded as subdocuments within blog posts.

- **Default Values**  
  - `Category` defaults to `"General"`.  
  - `Created At` and `Commented At` are automatically set to the current timestamp.

---

## **Usage Instructions**

1. Create a `schema.js` file in your project.
2. Define the schema using Mongoose.
3. Implement CRUD operations to manage blog posts and comments.

---

# **How to Fork and Set Up Your Repository**

---

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.  
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:
  - **Option 1: Download and Push**
    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:
       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```
       Replace `<your_github_repo_url>` with your personal GitHub repository URL.
    3. Commit and push the files to your GitHub repository:
       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```
  - **Option 2: Push Directly**
    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

---

## **3. Submission Instructions**

- Once your code is successfully pushed to GitHub:
  1. Copy the link to your GitHub repository.
  2. Submit the link on the assignment submission portal.  
     The link should follow this format:  
     **`https://github.com/<your_username>/<repository_name>`**

---

### **Example Submission**

If your GitHub username is `johnDoe` and the repository name is `assignment-repo`, the submission link would look like this:  
**`https://github.com/johnDoe/assignment-repo`**
