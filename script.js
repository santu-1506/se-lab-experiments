// SE Lab Experiments - COMPLETE DETAILED STEPS from PDF
const experiments = [
    {
        id: 2,
        title: "Exploring Git Local and Remote Commands",
        description: "Complete guide to git commands with 10 real scenario-based problems and solutions.",
        tags: ["Git", "GitHub", "Version Control"],
        content: `
            <h2>Experiment 2: Git Local and Remote Commands</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Push multi-folder project into private repository</li>
                <li>Explore all git commands on multi-folder project</li>
                <li>Solve 10 scenario-based git problems</li>
            </ul>
            
            <h3>Part 1: Github Global Configuration</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Git Bash</strong></p>
                <p>Search for "Git Bash" in Windows and open it</p>
                
                <p><span class="step-number">2</span> <strong>Configure your name</strong></p>
                <pre><code>git config --global user.name "Your Name"</code></pre>
                
                <p><span class="step-number">3</span> <strong>Configure your email</strong></p>
                <pre><code>git config --global user.email "youremail@example.com"</code></pre>
                
                <p><span class="step-number">4</span> <strong>Verify configuration</strong></p>
                <pre><code>git config --list</code></pre>
            </div>
            
            <h3>Part 2: Push to GitHub Repository</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Navigate to your project folder</strong></p>
                <pre><code>cd path/to/your/project</code></pre>
                
                <p><span class="step-number">2</span> <strong>Initialize Git repository</strong></p>
                <pre><code>git init</code></pre>
                <p>✓ Creates .git folder in your project</p>
                
                <p><span class="step-number">3</span> <strong>Add all files to staging</strong></p>
                <pre><code>git add .</code></pre>
                <p>✓ Stages all files for commit</p>
                
                <p><span class="step-number">4</span> <strong>Commit your changes</strong></p>
                <pre><code>git commit -m "Initial commit"</code></pre>
                
                <p><span class="step-number">5</span> <strong>Add remote repository</strong></p>
                <pre><code>git remote add origin https://github.com/username/repo-name.git</code></pre>
                <p>Replace 'username' and 'repo-name' with yours</p>
                
                <p><span class="step-number">6</span> <strong>Push to GitHub</strong></p>
                <pre><code>git push -u origin main</code></pre>
                <p>✓ Your code is now on GitHub!</p>
            </div>
            
            <h3>Part 3: 10 Scenario-Based Problems with Solutions</h3>
            
            <h4>Scenario 1: Non-fast-forward Error When Pushing</h4>
            <p><strong>Problem:</strong> You're getting "rejected - non-fast-forward" error</p>
            <p><strong>Reason:</strong> Remote branch has changes that your local branch doesn't have</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Step 1: Rebase your changes on top of remote
git pull --rebase origin branch-name

# Step 2: If conflicts occur, resolve them in files
# Edit the conflicted files, remove conflict markers

# Step 3: Continue rebase
git add .
git rebase --continue

# Step 4: Push changes
git push origin branch-name</code></pre>
            
            <h4>Scenario 2: Push Feature Branch Without Affecting Main</h4>
            <p><strong>Problem:</strong> Need to push feature branch independently</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Simply push your feature branch
git push origin feature/feat-1

# This creates a new remote branch
# Main branch remains unaffected</code></pre>
            
            <h4>Scenario 3: Update Local Repository with Latest Changes</h4>
            <p><strong>Problem:</strong> Repository structure changed, new branches added</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Step 1: Fetch all remote changes
git fetch origin

# Step 2: See all branches (including new ones)
git branch -a

# Step 3: Checkout new branch
git checkout branch-name</code></pre>
            
            <h4>Scenario 4: Pull Changes Without Merge Conflicts</h4>
            <p><strong>Problem:</strong> Colleague pushed changes, you have local changes</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Step 1: Save your changes temporarily
git stash

# Step 2: Pull latest changes with rebase
git pull --rebase origin main

# Step 3: Apply your saved changes back
git stash pop

# Step 4: If conflicts, resolve and commit
git add .
git commit -m "Resolved conflicts"</code></pre>
            
            <h4>Scenario 5: Remove Accidentally Pushed Sensitive File</h4>
            <p><strong>Problem:</strong> Pushed API keys or passwords to remote</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Step 1: Remove file from tracking
git rm --cached path/to/sensitive-file

# Step 2: Commit the removal
git commit -m "Remove sensitive file"

# Step 3: Push changes
git push origin main

# Step 4: Remove from history (if needed)
git filter-branch --force --index-filter \\
  "git rm --cached --ignore-unmatch path/to/file" \\
  --prune-empty --tag-name-filter cat -- --all

# Step 5: Force push (BE CAREFUL!)
git push origin --force --all

# Step 6: IMPORTANT: Rotate/change the exposed secret!</code></pre>
            
            <h4>Scenario 6: Integrate Latest Main into Feature Branch</h4>
            <p><strong>Problem:</strong> Manager wants latest main changes in your feature branch</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Step 1: Switch to feature branch
git checkout feature/your-feature

# Step 2: Fetch latest changes
git fetch origin

# Step 3: Rebase on main
git rebase origin/main

# Step 4: Resolve conflicts if any
# Edit files, then:
git add .
git rebase --continue

# Step 5: Force push feature branch
git push origin feature/your-feature --force</code></pre>
            
            <h4>Scenario 7: Change Remote Repository URL</h4>
            <p><strong>Problem:</strong> Need to push to different remote repository</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Step 1: Check current remote
git remote -v

# Step 2: Change remote URL
git remote set-url origin https://github.com/username/new-repo.git

# Step 3: Verify change
git remote -v

# Step 4: Push to new remote
git push origin branch-name</code></pre>
            
            <h4>Scenario 8: Update Without Losing Local Changes</h4>
            <p><strong>Problem:</strong> Local branch behind remote, don't want to lose changes</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Step 1: Save local changes
git stash

# Step 2: Pull with rebase
git pull --rebase origin branch-name

# Step 3: Restore your changes
git stash pop

# Step 4: If conflicts, resolve them
# Edit files, then commit
git add .
git commit -m "Merge changes"</code></pre>
            
            <h4>Scenario 9: Resolve Merge Conflicts</h4>
            <p><strong>Problem:</strong> Local changes conflict with remote changes</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Step 1: Pull changes (conflicts will be shown)
git pull origin branch-name

# Step 2: Git shows conflicted files
# Open each file and look for:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name

# Step 3: Edit file - keep what you want, remove markers

# Step 4: Mark as resolved
git add conflicted-file.txt

# Step 5: Complete the merge
git commit

# Step 6: Push resolved changes
git push origin branch-name</code></pre>
            
            <h4>Scenario 10: Delete Remote Branch</h4>
            <p><strong>Problem:</strong> Need to delete branch from remote repository</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Method 1: Using --delete flag
git push origin --delete feature/branch-name

# Method 2: Using colon syntax
git push origin :feature/branch-name

# Delete local branch too
git branch -d feature/branch-name

# Verify deletion
git branch -a</code></pre>
            
            <h3>Essential Git Commands Reference</h3>
            <pre><code># Status and Information
git status              # Check current status
git log                 # View commit history
git log --oneline       # Compact commit history
git diff                # See unstaged changes

# Branching
git branch              # List branches
git branch new-branch   # Create new branch
git checkout branch     # Switch to branch
git checkout -b branch  # Create and switch to branch
git merge branch-name   # Merge branch into current

# Remote Operations
git remote -v           # View remotes
git fetch origin        # Download remote changes
git pull origin main    # Fetch and merge
git push origin main    # Push to remote

# Stashing (Save work temporarily)
git stash               # Save changes
git stash list          # View stashed changes
git stash pop           # Apply and remove stash
git stash apply         # Apply without removing

# Undoing Changes
git reset HEAD file     # Unstage file
git checkout -- file    # Discard file changes
git revert commit-hash  # Revert a commit
git reset --hard HEAD~1 # Undo last commit (DANGER!)

# Viewing History
git log --graph --oneline --all  # Visual tree
git show commit-hash    # Show commit details</code></pre>
        `
    },
    {
        id: 3,
        title: "Collaborative Coding Using Git",
        description: "Create organizations, shared repositories, handle pull requests, resolve conflicts, and work with patches.",
        tags: ["Git", "Collaboration", "Organizations", "Pull Requests"],
        content: `
            <h2>Experiment 3: Collaborative Coding Using Git</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Create GitHub Organization and add team members</li>
                <li>Work with shared repositories</li>
                <li>Resolve conflicts when multiple people edit same code</li>
                <li>Create and apply patches</li>
            </ul>
            
            <h3>Part 1: Creating GitHub Organization</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Go to GitHub</strong></p>
                <p>Open https://github.com and login</p>
                
                <p><span class="step-number">2</span> <strong>Click on your profile picture (top right)</strong></p>
                
                <p><span class="step-number">3</span> <strong>Select "Your organizations"</strong></p>
                
                <p><span class="step-number">4</span> <strong>Click "New organization"</strong></p>
                
                <p><span class="step-number">5</span> <strong>Choose plan</strong></p>
                <p>✓ Select "Create a free organization"</p>
                
                <p><span class="step-number">6</span> <strong>Enter organization details</strong></p>
                <ul>
                    <li>Organization name: se-lab-kmit (or your choice)</li>
                    <li>Contact email: your email</li>
                    <li>This organization belongs to: My personal account</li>
                </ul>
                
                <p><span class="step-number">7</span> <strong>Click "Next"</strong></p>
                
                <p><span class="step-number">8</span> <strong>Invite team members</strong></p>
                <p>Enter teammate email addresses and click "Invite"</p>
                
                <p><span class="step-number">9</span> <strong>Complete setup</strong></p>
                <p>✓ Organization is created!</p>
            </div>
            
            <h3>Part 2: Create Shared Repository in Organization</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Go to organization page</strong></p>
                <p>Click on organization name</p>
                
                <p><span class="step-number">2</span> <strong>Click "New repository"</strong></p>
                
                <p><span class="step-number">3</span> <strong>Enter repository details</strong></p>
                <ul>
                    <li>Repository name: LocalHunt-01</li>
                    <li>Description: (optional)</li>
                    <li>Visibility: Private or Public</li>
                    <li>✓ Initialize with README</li>
                </ul>
                
                <p><span class="step-number">4</span> <strong>Click "Create repository"</strong></p>
                
                <p><span class="step-number">5</span> <strong>Add collaborators</strong></p>
                <p>Settings → Collaborators → Add people</p>
            </div>
            
            <h3>Part 3: Clone and Work on Shared Repository</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Copy repository URL</strong></p>
                <p>Click green "Code" button → Copy HTTPS URL</p>
                
                <p><span class="step-number">2</span> <strong>Open Git Bash / Terminal</strong></p>
                
                <p><span class="step-number">3</span> <strong>Clone repository</strong></p>
                <pre><code>git clone https://github.com/org-name/LocalHunt-01.git</code></pre>
                <p>✓ Repository downloaded to your computer</p>
                
                <p><span class="step-number">4</span> <strong>Navigate to repository</strong></p>
                <pre><code>cd LocalHunt-01</code></pre>
                
                <p><span class="step-number">5</span> <strong>Create a new feature branch</strong></p>
                <pre><code>git checkout -b feature/my-feature</code></pre>
                <p>✓ You're now on a new branch</p>
                
                <p><span class="step-number">6</span> <strong>Make changes to files</strong></p>
                <p>Edit README.md or add new files</p>
                
                <p><span class="step-number">7</span> <strong>Check status</strong></p>
                <pre><code>git status</code></pre>
                <p>✓ See which files changed</p>
                
                <p><span class="step-number">8</span> <strong>Stage changes</strong></p>
                <pre><code>git add .</code></pre>
                
                <p><span class="step-number">9</span> <strong>Commit changes</strong></p>
                <pre><code>git commit -m "Add new feature"</code></pre>
                
                <p><span class="step-number">10</span> <strong>Push feature branch</strong></p>
                <pre><code>git push origin feature/my-feature</code></pre>
                <p>✓ Branch is now on GitHub!</p>
            </div>
            
            <h3>Part 4: Create Pull Request</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Go to GitHub repository page</strong></p>
                
                <p><span class="step-number">2</span> <strong>You'll see a yellow banner</strong></p>
                <p>"feature/my-feature had recent pushes"</p>
                
                <p><span class="step-number">3</span> <strong>Click "Compare & pull request"</strong></p>
                
                <p><span class="step-number">4</span> <strong>Fill pull request details</strong></p>
                <ul>
                    <li>Title: Brief description of changes</li>
                    <li>Description: Detailed explanation</li>
                    <li>Base: main (where you want to merge TO)</li>
                    <li>Compare: feature/my-feature (your branch)</li>
                </ul>
                
                <p><span class="step-number">5</span> <strong>Click "Create pull request"</strong></p>
                
                <p><span class="step-number">6</span> <strong>Wait for review</strong></p>
                <p>Team members can review, comment, approve</p>
                
                <p><span class="step-number">7</span> <strong>Merge pull request</strong></p>
                <p>Once approved, click "Merge pull request"</p>
                
                <p><span class="step-number">8</span> <strong>Delete branch (optional)</strong></p>
                <p>Click "Delete branch" after merging</p>
            </div>
            
            <h3>Part 5: Fork Workflow</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Go to repository you want to fork</strong></p>
                <p>Example: https://github.com/original-owner/simple-repo-se</p>
                
                <p><span class="step-number">2</span> <strong>Click "Fork" button (top right)</strong></p>
                
                <p><span class="step-number">3</span> <strong>Select your account</strong></p>
                <p>✓ Repository is copied to your account</p>
                
                <p><span class="step-number">4</span> <strong>Clone YOUR fork</strong></p>
                <pre><code>git clone https://github.com/YOUR-username/simple-repo-se.git
cd simple-repo-se</code></pre>
                
                <p><span class="step-number">5</span> <strong>Add upstream remote</strong></p>
                <pre><code>git remote add upstream https://github.com/original-owner/simple-repo-se.git</code></pre>
                <p>This points to the original repository</p>
                
                <p><span class="step-number">6</span> <strong>Create feature branch</strong></p>
                <pre><code>git checkout -b feature/new-feature</code></pre>
                
                <p><span class="step-number">7</span> <strong>Make changes and commit</strong></p>
                <pre><code>git add .
git commit -m "Add new feature"</code></pre>
                
                <p><span class="step-number">8</span> <strong>Push to YOUR fork</strong></p>
                <pre><code>git push origin feature/new-feature</code></pre>
                
                <p><span class="step-number">9</span> <strong>Create PR to original repo</strong></p>
                <ul>
                    <li>Go to YOUR forked repo on GitHub</li>
                    <li>Click "Contribute" → "Open pull request"</li>
                    <li>Base repository: original repo</li>
                    <li>Head repository: your fork</li>
                    <li>Create pull request</li>
                </ul>
                
                <p><span class="step-number">10</span> <strong>Keep fork updated</strong></p>
                <pre><code># Fetch upstream changes
git fetch upstream

# Merge into your main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main</code></pre>
            </div>
            
            <h3>Part 6: Resolving Merge Conflicts</h3>
            <p><strong>When do conflicts occur?</strong> When two people edit the same lines in the same file.</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Pull latest changes</strong></p>
                <pre><code>git pull origin main</code></pre>
                
                <p><span class="step-number">2</span> <strong>Git shows conflict message</strong></p>
                <pre><code>CONFLICT (content): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit.</code></pre>
                
                <p><span class="step-number">3</span> <strong>Open conflicted file</strong></p>
                <p>You'll see conflict markers:</p>
                <pre><code><<<<<<< HEAD
Your changes (current branch)
=======
Their changes (incoming)
>>>>>>> branch-name</code></pre>
                
                <p><span class="step-number">4</span> <strong>Decide what to keep</strong></p>
                <p>Options:</p>
                <ul>
                    <li>Keep your changes only</li>
                    <li>Keep their changes only</li>
                    <li>Keep both (merge manually)</li>
                    <li>Write completely new code</li>
                </ul>
                
                <p><span class="step-number">5</span> <strong>Edit the file</strong></p>
                <p>Remove the <<<<<<, =======, >>>>>>> markers</p>
                <p>Keep the code you want</p>
                
                <p><span class="step-number">6</span> <strong>Save the file</strong></p>
                
                <p><span class="step-number">7</span> <strong>Mark as resolved</strong></p>
                <pre><code>git add file.txt</code></pre>
                
                <p><span class="step-number">8</span> <strong>Commit the resolution</strong></p>
                <pre><code>git commit -m "Resolve merge conflict in file.txt"</code></pre>
                
                <p><span class="step-number">9</span> <strong>Push changes</strong></p>
                <pre><code>git push origin main</code></pre>
                <p>✓ Conflict resolved!</p>
            </div>
            
            <h3>Part 7: Creating and Applying Patches</h3>
            
            <h4>Creating a Patch</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create patch from last commit</strong></p>
                <pre><code>git format-patch -1 HEAD</code></pre>
                <p>✓ Creates: 0001-commit-message.patch</p>
                
                <p><span class="step-number">2</span> <strong>Create patch from specific commit</strong></p>
                <pre><code>git format-patch commit-hash</code></pre>
                
                <p><span class="step-number">3</span> <strong>Create patch for last 3 commits</strong></p>
                <pre><code>git format-patch HEAD~3</code></pre>
                
                <p><span class="step-number">4</span> <strong>Create patch between commits</strong></p>
                <pre><code>git format-patch commit1..commit2</code></pre>
                
                <p><span class="step-number">5</span> <strong>Send patch file</strong></p>
                <p>Share the .patch file via email or file transfer</p>
            </div>
            
            <h4>Applying a Patch</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Receive patch file</strong></p>
                <p>Save it in your repository folder</p>
                
                <p><span class="step-number">2</span> <strong>Check if patch applies cleanly</strong></p>
                <pre><code>git apply --check 0001-patch-file.patch</code></pre>
                <p>✓ No output = patch is good</p>
                <p>✗ Error messages = conflicts exist</p>
                
                <p><span class="step-number">3</span> <strong>Apply patch (without committing)</strong></p>
                <pre><code>git apply 0001-patch-file.patch</code></pre>
                
                <p><span class="step-number">4</span> <strong>OR apply and commit automatically</strong></p>
                <pre><code>git am 0001-patch-file.patch</code></pre>
                <p>✓ Applies patch AND creates commit</p>
                
                <p><span class="step-number">5</span> <strong>Verify changes</strong></p>
                <pre><code>git log
git diff</code></pre>
                
                <p><span class="step-number">6</span> <strong>If conflicts occur</strong></p>
                <pre><code># Fix conflicts manually
git add .
git am --continue</code></pre>
            </div>
            
            <h3>Best Practices for Collaboration</h3>
            <ul>
                <li>✓ <strong>Pull before push:</strong> Always get latest changes first</li>
                <li>✓ <strong>Use feature branches:</strong> Don't work directly on main</li>
                <li>✓ <strong>Write clear commits:</strong> Describe WHAT and WHY</li>
                <li>✓ <strong>Small commits:</strong> Easier to review and revert</li>
                <li>✓ <strong>Review code:</strong> Use pull requests for reviews</li>
                <li>✓ <strong>Communicate:</strong> Tell team what you're working on</li>
                <li>✓ <strong>Sync often:</strong> Pull updates regularly</li>
                <li>✓ <strong>Test before PR:</strong> Make sure code works</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Build and Package with Maven",
        description: "Complete guide to Maven Java and Web projects with step-by-step Eclipse and command-line instructions.",
        tags: ["Maven", "Java", "Web App", "pom.xml"],
        content: `
            <h2>Experiment 4: Maven Projects</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Understand Maven project structure and lifecycle</li>
                <li>Build and package Java applications</li>
                <li>Build and package Web applications</li>
                <li>Add and manage dependencies using pom.xml</li>
                <li>Generate executable JARs and deployable WARs</li>
            </ul>
            
            <h3>Part 1: Creating Maven Java Project in Eclipse</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Eclipse IDE</strong></p>
                
                <p><span class="step-number">2</span> <strong>File → New → Maven Project</strong></p>
                
                <p><span class="step-number">3</span> <strong>Select default workspace location</strong></p>
                <p>✓ Check "Create a simple project" OR continue with archetype</p>
                <p>Click "Next"</p>
                
                <p><span class="step-number">4</span> <strong>Select Archetype</strong></p>
                <p>Filter: Type <code>maven-archetype-quickstart</code></p>
                <p>Select it from the list</p>
                <p>Click "Next"</p>
                
                <p><span class="step-number">5</span> <strong>Enter Project Details</strong></p>
                <ul>
                    <li><strong>Group Id:</strong> com.example (your organization)</li>
                    <li><strong>Artifact Id:</strong> my-app (project name)</li>
                    <li><strong>Version:</strong> 1.0-SNAPSHOT (default)</li>
                    <li><strong>Package:</strong> com.example.app (base package)</li>
                </ul>
                <p>Click "Finish"</p>
                
                <p><span class="step-number">6</span> <strong>Confirm in Console</strong></p>
                <p>Console will show:</p>
                <pre><code>Define value for property 'groupId': com.example
Define value for property 'artifactId': my-app
...
Y: : </code></pre>
                <p>Type: <code>y</code> and press Enter</p>
                
                <p><span class="step-number">7</span> <strong>Wait for BUILD SUCCESS</strong></p>
                <pre><code>[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------</code></pre>
                <p>✓ Project is created!</p>
            </div>
            
            <h3>Maven Project Structure</h3>
            <pre><code>my-app/
├── pom.xml                    # Project configuration file
├── src/
│   ├── main/
│   │   └── java/
│   │       └── com/example/
│   │           └── App.java   # Main application file
│   └── test/
│       └── java/
│           └── com/example/
│               └── AppTest.java  # Test file
└── target/                    # Generated after build
    ├── classes/               # Compiled .class files
    └── my-app-1.0-SNAPSHOT.jar  # Final JAR file</code></pre>
            
            <h3>Understanding pom.xml</h3>
            <p><strong>pom.xml</strong> = Project Object Model (Maven configuration file)</p>
            <pre><code>&lt;project xmlns="http://maven.apache.org/POM/4.0.0"&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  
  &lt;!-- Project Coordinates --&gt;
  &lt;groupId&gt;com.example&lt;/groupId&gt;
  &lt;artifactId&gt;my-app&lt;/artifactId&gt;
  &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
  &lt;packaging&gt;jar&lt;/packaging&gt;
  
  &lt;!-- Project name --&gt;
  &lt;name&gt;my-app&lt;/name&gt;
  
  &lt;!-- Java version --&gt;
  &lt;properties&gt;
    &lt;maven.compiler.source&gt;11&lt;/maven.compiler.source&gt;
    &lt;maven.compiler.target&gt;11&lt;/maven.compiler.target&gt;
  &lt;/properties&gt;
  
  &lt;!-- Dependencies --&gt;
  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;junit&lt;/groupId&gt;
      &lt;artifactId&gt;junit&lt;/artifactId&gt;
      &lt;version&gt;4.13.2&lt;/version&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;</code></pre>
            
            <h3>Write Code in App.java</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open App.java</strong></p>
                <p>Navigate: src/main/java/com/example/App.java</p>
                
                <p><span class="step-number">2</span> <strong>Write/Edit Code</strong></p>
                <pre><code>package com.example;

public class App {
    public static void main(String[] args) {
        System.out.println("Hello Maven World!");
        System.out.println("My first Maven project");
    }
}</code></pre>
                
                <p><span class="step-number">3</span> <strong>Save the file</strong></p>
                <p>Press Ctrl+S</p>
            </div>
            
            <h3>Maven Lifecycle Commands</h3>
            <p><strong>Maven Build Lifecycle:</strong> clean → compile → test → package → install → deploy</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Clean</strong> - Delete target directory</p>
                <pre><code>mvn clean</code></pre>
                <p>✓ Removes all generated files</p>
                
                <p><span class="step-number">2</span> <strong>Compile</strong> - Compile source code</p>
                <pre><code>mvn compile</code></pre>
                <p>✓ Creates .class files in target/classes/</p>
                
                <p><span class="step-number">3</span> <strong>Test</strong> - Run unit tests</p>
                <pre><code>mvn test</code></pre>
                <p>✓ Runs all test files (*Test.java)</p>
                
                <p><span class="step-number">4</span> <strong>Package</strong> - Create JAR/WAR file</p>
                <pre><code>mvn package</code></pre>
                <p>✓ Creates JAR in target/ folder</p>
                
                <p><span class="step-number">5</span> <strong>Install</strong> - Install to local Maven repository</p>
                <pre><code>mvn install</code></pre>
                <p>✓ Stores in ~/.m2/repository/</p>
                
                <p><span class="step-number">6</span> <strong>Combined Commands</strong></p>
                <pre><code>mvn clean install    # Clean + Compile + Test + Package + Install
mvn clean package    # Clean + Compile + Test + Package</code></pre>
            </div>
            
            <h3>Building Maven Java Project</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Right-click project folder</strong></p>
                <p>In Eclipse Package Explorer</p>
                
                <p><span class="step-number">2</span> <strong>Select "Show in Git Bash"</strong></p>
                <p>OR "Show In" → "System Explorer" → Open Git Bash there</p>
                
                <p><span class="step-number">3</span> <strong>Clean the project</strong></p>
                <pre><code>mvn clean</code></pre>
                <p>Output:</p>
                <pre><code>[INFO] BUILD SUCCESS</code></pre>
                
                <p><span class="step-number">4</span> <strong>Compile the project</strong></p>
                <pre><code>mvn compile</code></pre>
                
                <p><span class="step-number">5</span> <strong>Run tests</strong></p>
                <pre><code>mvn test</code></pre>
                
                <p><span class="step-number">6</span> <strong>Package as JAR</strong></p>
                <pre><code>mvn package</code></pre>
                <p>✓ JAR file created: <code>target/my-app-1.0-SNAPSHOT.jar</code></p>
                
                <p><span class="step-number">7</span> <strong>Run the JAR file</strong></p>
                <pre><code>java -cp target/my-app-1.0-SNAPSHOT.jar com.example.App</code></pre>
                <p>Output:</p>
                <pre><code>Hello Maven World!
My first Maven project</code></pre>
            </div>
            
            <h3>Push to GitHub</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Git Bash in project folder</strong></p>
                
                <p><span class="step-number">2</span> <strong>Initialize Git</strong></p>
                <pre><code>git init</code></pre>
                
                <p><span class="step-number">3</span> <strong>Add .gitignore file</strong></p>
                <pre><code>echo "target/" > .gitignore
echo ".classpath" >> .gitignore
echo ".project" >> .gitignore
echo ".settings/" >> .gitignore</code></pre>
                
                <p><span class="step-number">4</span> <strong>Add all files</strong></p>
                <pre><code>git add .</code></pre>
                
                <p><span class="step-number">5</span> <strong>Commit</strong></p>
                <pre><code>git commit -m "Initial Maven Java project"</code></pre>
                
                <p><span class="step-number">6</span> <strong>Add remote repository</strong></p>
                <pre><code>git remote add origin https://github.com/username/maven-java-project.git</code></pre>
                
                <p><span class="step-number">7</span> <strong>Push to GitHub</strong></p>
                <pre><code>git push -u origin main</code></pre>
                <p>✓ Project is on GitHub!</p>
            </div>
            
            <h3>Part 2: Creating Maven Web Project</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>File → New → Maven Project</strong></p>
                
                <p><span class="step-number">2</span> <strong>Select Archetype</strong></p>
                <p>Filter: <code>maven-archetype-webapp</code></p>
                <p>Select it and click "Next"</p>
                
                <p><span class="step-number">3</span> <strong>Enter Details</strong></p>
                <ul>
                    <li><strong>Group Id:</strong> com.example</li>
                    <li><strong>Artifact Id:</strong> my-webapp</li>
                </ul>
                <p>Click "Finish"</p>
                
                <p><span class="step-number">4</span> <strong>Type 'y' in Console</strong></p>
                <p>Press Enter to confirm</p>
                
                <p><span class="step-number">5</span> <strong>Wait for BUILD SUCCESS</strong></p>
                <p>✓ Web project created!</p>
            </div>
            
            <h3>Web Project Structure</h3>
            <pre><code>my-webapp/
├── pom.xml
└── src/
    └── main/
        ├── java/              # Java source files (servlets)
        ├── resources/         # Config files
        └── webapp/
            ├── WEB-INF/
            │   └── web.xml    # Web app configuration
            └── index.jsp      # Homepage</code></pre>
            
            <h3>Edit index.jsp/index.html</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Navigate to src/main/webapp/</strong></p>
                
                <p><span class="step-number">2</span> <strong>Open index.jsp</strong></p>
                
                <p><span class="step-number">3</span> <strong>Write HTML Code</strong></p>
                <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Web Application&lt;/title&gt;
    &lt;style&gt;
        body { 
            font-family: Arial; 
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }
        h1 { font-size: 3em; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Web App!&lt;/h1&gt;
    &lt;p&gt;Built with Maven&lt;/p&gt;
    &lt;p&gt;Current time: &lt;%= new java.util.Date() %&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                
                <p><span class="step-number">4</span> <strong>Save file</strong></p>
            </div>
            
            <h3>Run on Tomcat Server (Eclipse)</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Right-click project</strong></p>
                
                <p><span class="step-number">2</span> <strong>Run As → Run on Server</strong></p>
                
                <p><span class="step-number">3</span> <strong>Select Tomcat server</strong></p>
                <p>If not configured, add new server:</p>
                <ul>
                    <li>Select "Apache" → "Tomcat v9.0"</li>
                    <li>Browse to Tomcat installation directory</li>
                    <li>Click "Finish"</li>
                </ul>
                
                <p><span class="step-number">4</span> <strong>Click "Finish"</strong></p>
                
                <p><span class="step-number">5</span> <strong>Browser opens automatically</strong></p>
                <p>URL: http://localhost:8080/my-webapp/</p>
                <p>✓ Your web page is displayed!</p>
            </div>
            
            <h3>Package as WAR File</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Git Bash in project folder</strong></p>
                
                <p><span class="step-number">2</span> <strong>Build WAR file</strong></p>
                <pre><code>mvn clean package</code></pre>
                
                <p><span class="step-number">3</span> <strong>Check target folder</strong></p>
                <pre><code>ls target/</code></pre>
                <p>✓ You'll see: <code>my-webapp.war</code></p>
                
                <p><span class="step-number">4</span> <strong>Deploy to Tomcat manually</strong></p>
                <pre><code>cp target/my-webapp.war $TOMCAT_HOME/webapps/</code></pre>
                
                <p><span class="step-number">5</span> <strong>Start Tomcat</strong></p>
                <pre><code>$TOMCAT_HOME/bin/startup.sh    # Linux/Mac
$TOMCAT_HOME/bin/startup.bat   # Windows</code></pre>
                
                <p><span class="step-number">6</span> <strong>Access application</strong></p>
                <p>Open browser: http://localhost:8080/my-webapp/</p>
            </div>
            
            <h3>Push Web Project to GitHub</h3>
            <p>Follow same git steps as Java project (initialize, add, commit, push)</p>
            
            <h3>Adding Dependencies</h3>
            <p>Add libraries your project needs in pom.xml</p>
            
            <pre><code>&lt;dependencies&gt;
  &lt;!-- MySQL Database Driver --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;mysql&lt;/groupId&gt;
    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
    &lt;version&gt;8.0.33&lt;/version&gt;
  &lt;/dependency&gt;
  
  &lt;!-- Servlet API --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;javax.servlet&lt;/groupId&gt;
    &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;
    &lt;version&gt;4.0.1&lt;/version&gt;
    &lt;scope&gt;provided&lt;/scope&gt;
  &lt;/dependency&gt;
  
  &lt;!-- JSON Processing --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;com.google.code.gson&lt;/groupId&gt;
    &lt;artifactId&gt;gson&lt;/artifactId&gt;
    &lt;version&gt;2.10.1&lt;/version&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</code></pre>
            
            <p><strong>After adding dependencies:</strong></p>
            <pre><code>mvn clean install -U    # -U forces update</code></pre>
            
            <h3>Common Maven Commands</h3>
            <pre><code># Display dependency tree
mvn dependency:tree

# Update dependencies
mvn clean install -U

# Skip tests
mvn clean install -DskipTests

# Run specific test
mvn test -Dtest=TestClassName

# Show effective POM
mvn help:effective-pom

# Create project from archetype
mvn archetype:generate

# Run web app (with Jetty plugin)
mvn jetty:run</code></pre>
            
            <h3>Troubleshooting</h3>
            
            <h4>Issue: Dependencies not downloading</h4>
            <p><strong>Solution:</strong></p>
            <pre><code>mvn clean install -U
# OR delete .m2/repository and rebuild</code></pre>
            
            <h4>Issue: Wrong Java version</h4>
            <p><strong>Solution:</strong> Add to pom.xml:</p>
            <pre><code>&lt;properties&gt;
  &lt;maven.compiler.source&gt;11&lt;/maven.compiler.source&gt;
  &lt;maven.compiler.target&gt;11&lt;/maven.compiler.target&gt;
&lt;/properties&gt;</code></pre>
            
            <h4>Issue: BUILD FAILURE</h4>
            <p><strong>Solution:</strong></p>
            <pre><code># Show debug info
mvn clean install -X

# Show stack trace
mvn clean install -e</code></pre>
        `
    },
    {
        id: 5,
        title: "Docker CLI Commands",
        description: "Master Docker commands: pull images, run containers, install Nginx, manage networks and volumes with 15+ scenarios.",
        tags: ["Docker", "Containers", "Nginx", "CLI"],
        content: `
            <h2>Experiment 5: Docker CLI Commands</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Pull, run, stop, start, and remove containers</li>
                <li>Install and configure Nginx in Docker container</li>
                <li>Manage Docker images efficiently</li>
                <li>Configure networks for container communication</li>
                <li>Create and manage persistent storage (volumes)</li>
            </ul>
            
            <h3>Introduction to Docker</h3>
            <p>Docker is a platform that allows us to run applications inside lightweight <strong>containers</strong>. Containers are isolated environments that include everything needed to run an application. This makes it easy to set up and deploy software without worrying about dependencies or configurations on the host system.</p>
            
            <h3>Part 1: Installing and Setting up Nginx in Docker</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Terminal/Command Prompt</strong></p>
                <p>Open Git Bash (Windows) or Terminal (Mac/Linux)</p>
                
                <p><span class="step-number">2</span> <strong>Pull Ubuntu Image from Docker Hub</strong></p>
                <pre><code>docker pull ubuntu:latest</code></pre>
                <p><strong>What this does:</strong> Downloads latest Ubuntu image from Docker Hub</p>
                <p><strong>Output:</strong></p>
                <pre><code>latest: Pulling from library/ubuntu
...
Status: Downloaded newer image for ubuntu:latest</code></pre>
                <p>✓ Ubuntu image downloaded!</p>
                
                <p><span class="step-number">3</span> <strong>Run Container with Port Mapping</strong></p>
                <pre><code>docker run -it --name myubuntu -p 3000:80 ubuntu</code></pre>
                <p><strong>Breaking down the command:</strong></p>
                <ul>
                    <li><code>-it</code> = Interactive terminal</li>
                    <li><code>--name myubuntu</code> = Name your container "myubuntu"</li>
                    <li><code>-p 3000:80</code> = Map host port 3000 to container port 80</li>
                    <li><code>ubuntu</code> = Image to use</li>
                </ul>
                <p>✓ You're now INSIDE the container! (root@containerid:#)</p>
                
                <p><span class="step-number">4</span> <strong>Update Package Lists (inside container)</strong></p>
                <pre><code>apt-get update</code></pre>
                <p>Wait for package lists to update...</p>
                
                <p><span class="step-number">5</span> <strong>Install Nginx</strong></p>
                <pre><code>apt-get install nginx -y</code></pre>
                <p><code>-y</code> = Automatically answer "yes" to prompts</p>
                <p>✓ Nginx installed!</p>
                
                <p><span class="step-number">6</span> <strong>Start Nginx Service</strong></p>
                <pre><code>service nginx start</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>* Starting nginx nginx</code></pre>
                <p>✓ Nginx is running!</p>
                
                <p><span class="step-number">7</span> <strong>Navigate to Web Root Directory</strong></p>
                <pre><code>cd /var/www/html</code></pre>
                <p>This is where Nginx serves files from</p>
                
                <p><span class="step-number">8</span> <strong>View Current Homepage</strong></p>
                <pre><code>cat index.html</code></pre>
                <p>Shows default Nginx page</p>
                
                <p><span class="step-number">9</span> <strong>Edit Homepage</strong></p>
                <pre><code>nano index.html</code></pre>
                <p>If nano not installed:</p>
                <pre><code>apt-get install nano -y
nano index.html</code></pre>
                
                <p><span class="step-number">10</span> <strong>Change Content</strong></p>
                <p>Replace the &lt;h1&gt; tag content:</p>
                <pre><code>&lt;h1&gt;Welcome to My Docker Nginx Server!&lt;/h1&gt;
&lt;p&gt;This is running inside a Docker container&lt;/p&gt;</code></pre>
                <p>Save: Press <code>Ctrl+X</code>, then <code>Y</code>, then <code>Enter</code></p>
                
                <p><span class="step-number">11</span> <strong>Restart Nginx</strong></p>
                <pre><code>service nginx reload</code></pre>
                <p>✓ Changes applied!</p>
                
                <p><span class="step-number">12</span> <strong>Open Browser</strong></p>
                <p>Navigate to: <code>http://localhost:3000</code></p>
                <p>✓ You'll see your custom Nginx page!</p>
                
                <p><span class="step-number">13</span> <strong>Exit Container (but keep it running)</strong></p>
                <p>Press <code>Ctrl+P</code> then <code>Ctrl+Q</code> (detach)</p>
                <p>OR to stop and exit: Type <code>exit</code></p>
            </div>
            
            <h3>Essential Docker Commands</h3>
            
            <h4>Container Management</h4>
            <pre><code># List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Start a stopped container
docker start container-name

# Stop a running container
docker stop container-name

# Restart a container
docker restart container-name

# Remove a container
docker rm container-name

# Remove a running container (force)
docker rm -f container-name

# View container logs
docker logs container-name

# Follow logs in real-time
docker logs -f container-name

# Enter a running container
docker exec -it container-name /bin/bash

# Check container resource usage
docker stats

# Inspect container details
docker inspect container-name</code></pre>
            
            <h4>Image Management</h4>
            <pre><code># List all images
docker images

# Pull image from Docker Hub
docker pull image-name:tag

# Remove image
docker rmi image-name

# Remove unused images
docker image prune

# Build image from Dockerfile
docker build -t image-name .

# Tag an image
docker tag source-image:tag target-image:tag

# Save image to tar file
docker save image-name > image.tar

# Load image from tar file
docker load < image.tar

# View image history
docker history image-name</code></pre>
            
            <h3>15 Scenario-Based Questions with Solutions</h3>
            
            <h4>Scenario 1: Check if Container is Running</h4>
            <p><strong>Problem:</strong> Your application is running inside Docker, but you're not sure if the container is active.</p>
            <p><strong>Solution:</strong></p>
            <pre><code>docker ps

# Shows:
CONTAINER ID   IMAGE     COMMAND       STATUS        PORTS           NAMES
abc123         nginx     "nginx..."    Up 2 hours    0.0.0.0:3000->80   myubuntu</code></pre>
            
            <h4>Scenario 2: Stop High CPU Container</h4>
            <p><strong>Problem:</strong> One container is consuming high CPU and you want to stop it.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># First, check which container
docker stats

# Then stop it
docker stop myubuntu1

# Verify it stopped
docker ps</code></pre>
            
            <h4>Scenario 3: Build Image from Dockerfile</h4>
            <p><strong>Problem:</strong> You've written a Dockerfile and want to build an image named "myapi".</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Create Dockerfile first
# Then build
docker build -t myapi .

# The dot (.) means current directory
# -t = tag/name the image</code></pre>
            
            <h4>Scenario 4: Expose Container Port</h4>
            <p><strong>Problem:</strong> Run container and expose internal port 5000 on host port 8080.</p>
            <p><strong>Solution:</strong></p>
            <pre><code>docker run -d -p 8080:5000 web_app

# -d = detached mode (runs in background)
# -p = port mapping (host:container)</code></pre>
            
            <h4>Scenario 5: Enter Running Container</h4>
            <p><strong>Problem:</strong> Container is running, but you want to go inside and debug.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Enter container shell
docker exec -it container-name /bin/bash

# If bash not available, try sh
docker exec -it container-name /bin/sh

# Exit without stopping container
exit</code></pre>
            
            <h4>Scenario 6: Delete Image</h4>
            <p><strong>Problem:</strong> You built test images and want to delete one called "old_api".</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Remove image
docker rmi old_api

# If in use by container, stop container first
docker stop container-using-image
docker rm container-using-image
docker rmi old_api

# Force remove
docker rmi -f old_api</code></pre>
            
            <h4>Scenario 7: Check Container Logs</h4>
            <p><strong>Problem:</strong> Your app crashed in the container. Need to check logs.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># View all logs
docker logs container-name

# View last 50 lines
docker logs --tail 50 container-name

# Follow logs in real-time
docker logs -f container-name

# Show timestamps
docker logs -t container-name</code></pre>
            
            <h4>Scenario 8: Run Container in Background</h4>
            <p><strong>Problem:</strong> You want to start a container and let it run in the background.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># -d flag runs in detached mode
docker run -d --name myapp -p 8080:80 nginx

# Check if running
docker ps</code></pre>
            
            <h4>Scenario 9: Check Which Container Uses Port</h4>
            <p><strong>Problem:</strong> You're not sure which container is using port 3000.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Check running containers with ports
docker ps

# Look at PORTS column
# Shows: 0.0.0.0:3000->80/tcp</code></pre>
            
            <h4>Scenario 10: Tag an Image</h4>
            <p><strong>Problem:</strong> You built an image but forgot to tag it.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Find image ID
docker images

# Tag it
docker tag image-id myapp:v1.0

# Or
docker tag old-name:tag new-name:tag</code></pre>
            
            <h4>Scenario 11: Export Image</h4>
            <p><strong>Problem:</strong> Want to export image to .tar file for offline transfer.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Save image
docker save myapp > myapp.tar

# Or with compression
docker save myapp | gzip > myapp.tar.gz

# To load on another machine
docker load < myapp.tar</code></pre>
            
            <h4>Scenario 12: Auto-Restart Container</h4>
            <p><strong>Problem:</strong> Want container to restart automatically if it crashes.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Run with restart policy
docker run -d --restart=always --name myapp nginx

# Restart policies:
# --restart=no          (default)
# --restart=always      (always restart)
# --restart=on-failure  (restart if exits with error)
# --restart=unless-stopped  (restart unless manually stopped)</code></pre>
            
            <h4>Scenario 13: Monitor Resource Usage</h4>
            <p><strong>Problem:</strong> Want to see how much CPU/RAM each container uses.</p>
            <p><strong>Solution:</strong></p>
            <pre><code># Real-time stats
docker stats

# Limit container RAM
docker run -d --memory="512m" nginx

# Limit CPU
docker run -d --cpus="1.5" nginx</code></pre>
            
            <h4>Scenario 14: Run Command Before Starting App</h4>
            <p><strong>Problem:</strong> Want to run a shell command before starting the app.</p>
            <p><strong>Solution:</strong> In Dockerfile:</p>
            <pre><code>FROM ubuntu
RUN apt-get update && apt-get install -y nginx
CMD service nginx start && tail -f /dev/null</code></pre>
            
            <h4>Scenario 15: Create Custom Nginx Image</h4>
            <p><strong>Problem:</strong> Want to create custom Nginx image with your static files.</p>
            <p><strong>Solution:</strong></p>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create Dockerfile</strong></p>
                <pre><code>FROM nginx:latest
COPY ./my-website /usr/share/nginx/html
EXPOSE 80</code></pre>
                
                <p><span class="step-number">2</span> <strong>Build image</strong></p>
                <pre><code>docker build -t my-nginx:v1 .</code></pre>
                
                <p><span class="step-number">3</span> <strong>Run container</strong></p>
                <pre><code>docker run -d -p 8080:80 my-nginx:v1</code></pre>
            </div>
            
            <h3>Docker Networks</h3>
            <pre><code># List networks
docker network ls

# Create network
docker network create my-network

# Run container on network
docker run -d --network=my-network --name app1 nginx

# Inspect network
docker network inspect my-network

# Remove network
docker network rm my-network</code></pre>
            
            <h3>Docker Volumes (Persistent Storage)</h3>
            <pre><code># Create volume
docker volume create my-data

# Run container with volume
docker run -d -v my-data:/app/data nginx

# List volumes
docker volume ls

# Inspect volume
docker volume inspect my-data

# Remove volume
docker volume rm my-data

# Mount host directory
docker run -d -v /host/path:/container/path nginx</code></pre>
            
            <h3>Useful Docker Commands</h3>
            <pre><code># Remove all stopped containers
docker container prune

# Remove all unused images
docker image prune -a

# Remove all unused volumes
docker volume prune

# Clean up everything
docker system prune -a

# Check Docker version
docker --version

# View Docker system info
docker info

# Copy file from container to host
docker cp container-name:/path/file.txt ./

                # Copy file from host to container
docker cp ./file.txt container-name:/path/</code></pre>
        `
    },
    {
        id: 6,
        title: "Docker Compose & Multi-Container Applications",
        description: "Create docker-compose.yml files, run WordPress with MySQL, deploy Flask apps, manage multi-container setups.",
        tags: ["Docker", "Docker Compose", "WordPress", "Flask"],
        content: `
            <h2>Experiment 6: Docker Compose</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Learn to define and run multiple interdependent services</li>
                <li>Write and interpret docker-compose.yml files</li>
                <li>Deploy WordPress with MySQL database</li>
                <li>Create Flask application with Docker Compose</li>
                <li>Configure container networking and persistent storage</li>
            </ul>
            
            <h3>What is Docker Compose?</h3>
            <p>Docker Compose is a tool for defining and running <strong>multi-container Docker applications</strong>. With Compose, you use a YAML file to configure your application's services, networks, and volumes. Then, with a single command, you create and start all the services.</p>
            
            <h3>Part 1: Docker Image Creation</h3>
            
            <h4>Method 1: Using Docker Commit</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create a container</strong></p>
                <pre><code>docker run -it --name mycontainer ubuntu</code></pre>
                
                <p><span class="step-number">2</span> <strong>Make changes inside container</strong></p>
                <pre><code>apt-get update
apt-get install -y nginx
# Make other changes...</code></pre>
                
                <p><span class="step-number">3</span> <strong>Exit container</strong></p>
                <pre><code>exit</code></pre>
                
                <p><span class="step-number">4</span> <strong>Commit container to image</strong></p>
                <pre><code>docker commit mycontainer my-custom-image</code></pre>
                <p>✓ Image created from container!</p>
                
                <p><span class="step-number">5</span> <strong>Verify image</strong></p>
                <pre><code>docker images</code></pre>
            </div>
            
            <h4>Method 2: Using Dockerfile (Recommended)</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create Dockerfile</strong></p>
                <pre><code>nano Dockerfile</code></pre>
                
                <p><span class="step-number">2</span> <strong>Write Dockerfile content</strong></p>
                <pre><code>FROM ubuntu:latest
RUN apt-get update && apt-get install -y nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]</code></pre>
                
                <p><span class="step-number">3</span> <strong>Build image</strong></p>
                <pre><code>docker build -t my-nginx-image .</code></pre>
                <p>✓ Image built from Dockerfile!</p>
                
                <p><span class="step-number">4</span> <strong>Check images</strong></p>
                <pre><code>docker images</code></pre>
            </div>
            
            <h3>Part 2: Running Two Servers Simultaneously</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create project directory</strong></p>
                <pre><code>mkdir docker-multi-server
cd docker-multi-server</code></pre>
                
                <p><span class="step-number">2</span> <strong>Create docker-compose.yml</strong></p>
                <pre><code>nano docker-compose.yml</code></pre>
                
                <p><span class="step-number">3</span> <strong>Write configuration</strong></p>
                <pre><code>version: '3'
services:
  web1:
    image: nginx
    ports:
      - "8080:80"
    container_name: server1
  
  web2:
    image: nginx
    ports:
      - "8081:80"
    container_name: server2</code></pre>
                
                <p><span class="step-number">4</span> <strong>Start services</strong></p>
                <pre><code>docker-compose up -d</code></pre>
                <p><code>-d</code> = detached mode (runs in background)</p>
                <p><strong>Output:</strong></p>
                <pre><code>Creating network "docker-multi-server_default"
Creating server1 ... done
Creating server2 ... done</code></pre>
                
                <p><span class="step-number">5</span> <strong>Verify containers running</strong></p>
                <pre><code>docker-compose ps</code></pre>
                
                <p><span class="step-number">6</span> <strong>Open in browser</strong></p>
                <ul>
                    <li>Server 1: http://localhost:8080</li>
                    <li>Server 2: http://localhost:8081</li>
                </ul>
                <p>✓ Both Nginx servers running!</p>
                
                <p><span class="step-number">7</span> <strong>Stop services</strong></p>
                <pre><code>docker-compose down</code></pre>
            </div>
            
            <h3>Part 3: WordPress with MySQL</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create project directory</strong></p>
                <pre><code>mkdir wordpress-app
cd wordpress-app</code></pre>
                
                <p><span class="step-number">2</span> <strong>Create docker-compose.yml</strong></p>
                <pre><code>version: '3'

services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password123
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wpuser
      MYSQL_PASSWORD: wppass
    
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wpuser
      WORDPRESS_DB_PASSWORD: wppass
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress_data:/var/www/html

volumes:
  db_data: {}
  wordpress_data: {}</code></pre>
                
                <p><span class="step-number">3</span> <strong>Start WordPress and MySQL</strong></p>
                <pre><code>docker-compose up -d</code></pre>
                <p>Wait for containers to start (may take 1-2 minutes first time)</p>
                
                <p><span class="step-number">4</span> <strong>Check status</strong></p>
                <pre><code>docker-compose ps</code></pre>
                <p>Both containers should be "Up"</p>
                
                <p><span class="step-number">5</span> <strong>Open WordPress in browser</strong></p>
                <p>Navigate to: http://localhost:8000</p>
                
                <p><span class="step-number">6</span> <strong>Complete WordPress Setup</strong></p>
                <ul>
                    <li>Select language</li>
                    <li>Enter site title: "My WordPress Site"</li>
                    <li>Username: admin</li>
                    <li>Password: (create strong password)</li>
                    <li>Email: your-email@example.com</li>
                    <li>Click "Install WordPress"</li>
                </ul>
                
                <p><span class="step-number">7</span> <strong>Login to WordPress</strong></p>
                <p>Use your username and password</p>
                <p>✓ WordPress dashboard opens!</p>
                
                <p><span class="step-number">8</span> <strong>Stop services</strong></p>
                <pre><code>docker-compose down</code></pre>
                <p>Note: Data is preserved in volumes!</p>
            </div>
            
            <h3>Part 4: Flask Application with Docker Compose</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create project directory</strong></p>
                <pre><code>mkdir flask-docker-app
cd flask-docker-app</code></pre>
                
                <p><span class="step-number">2</span> <strong>Create app.py</strong></p>
                <pre><code>nano app.py</code></pre>
                <p>Write:</p>
                <pre><code>from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return '''
        &lt;h1&gt;Hello from Flask in Docker!&lt;/h1&gt;
        &lt;p&gt;This is running inside a Docker container.&lt;/p&gt;
        &lt;p&gt;Container hostname: {}&lt;/p&gt;
    '''.format(os.getenv('HOSTNAME', 'unknown'))

@app.route('/api')
def api():
    return {"message": "Flask API running", "status": "success"}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)</code></pre>
                
                <p><span class="step-number">3</span> <strong>Create Dockerfile</strong></p>
                <pre><code>nano Dockerfile</code></pre>
                <p>Write:</p>
                <pre><code>FROM python:3.9-slim

WORKDIR /app

COPY app.py .

RUN pip install flask

EXPOSE 5000

CMD ["python", "app.py"]</code></pre>
                
                <p><span class="step-number">4</span> <strong>Create docker-compose.yml</strong></p>
                <pre><code>nano docker-compose.yml</code></pre>
                <p>Write:</p>
                <pre><code>version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/app
    environment:
      - FLASK_ENV=development</code></pre>
                
                <p><span class="step-number">5</span> <strong>Build and run</strong></p>
                <pre><code>docker-compose up --build</code></pre>
                <p><code>--build</code> = rebuild image before starting</p>
                
                <p><span class="step-number">6</span> <strong>Test in browser</strong></p>
                <ul>
                    <li>Homepage: http://localhost:5000</li>
                    <li>API: http://localhost:5000/api</li>
                </ul>
                <p>✓ Flask app running in Docker!</p>
                
                <p><span class="step-number">7</span> <strong>Stop with Ctrl+C</strong></p>
                <p>Or in detached mode: <code>docker-compose down</code></p>
            </div>
            
            <h3>Docker Compose Commands</h3>
            <pre><code># Start services in background
docker-compose up -d

# Start and rebuild images
docker-compose up --build

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# View running services
docker-compose ps

# View logs
docker-compose logs

# Follow logs in real-time
docker-compose logs -f

# View logs for specific service
docker-compose logs web

# Restart services
docker-compose restart

# Restart specific service
docker-compose restart web

# Stop services (without removing)
docker-compose stop

# Start stopped services
docker-compose start

# Build/rebuild images
docker-compose build

# Rebuild specific service
docker-compose build web

# Execute command in running container
docker-compose exec web bash

# Scale services
docker-compose up -d --scale web=3

# Pull latest images
docker-compose pull

# Validate compose file
docker-compose config</code></pre>
            
            <h3>Scenario-Based Questions</h3>
            
            <h4>Q1: Should you run multiple applications in the same container?</h4>
            <p><strong>Answer:</strong> No, it's not recommended.</p>
            <p><strong>Reasons:</strong></p>
            <ul>
                <li>Easier to scale independently</li>
                <li>Simpler logs and monitoring</li>
                <li>Avoids process management inside container</li>
            </ul>
            <p><strong>Solution:</strong> Use Docker Compose to manage multiple containers.</p>
            
            <h4>Q2: How to expose Flask API (port 5000) and Nginx (port 80)?</h4>
            <pre><code>version: '3'
services:
  flask_api:
    image: my-flask-api
    ports:
      - "5000:5000"
  nginx:
    image: nginx
    ports:
      - "80:80"</code></pre>
            
            <h4>Q3: How to run React, Express, and MongoDB together?</h4>
            <pre><code>version: '3'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
  
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mongo
  
  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:</code></pre>
            
            <h4>Q4: Two containers using same port - what happens?</h4>
            <p><strong>Problem:</strong> Port conflict error!</p>
            <p><strong>Solution:</strong> Map to different host ports:</p>
            <pre><code>docker run -p 8080:8080 app1
docker run -p 8081:8080 app2

# Or use reverse proxy like Nginx</code></pre>
            
            <h4>Q5: How to restart all services quickly?</h4>
            <pre><code>docker-compose down
docker-compose up --build -d</code></pre>
            
            <h4>Q6: Update only frontend, not backend or DB?</h4>
            <pre><code># Rebuild frontend
docker-compose build frontend

# Restart only frontend
docker-compose up -d frontend</code></pre>
            
            <h4>Q7: Tomcat on port 8080 - Connection Refused error?</h4>
            <p><strong>Possible reasons:</strong></p>
            <ul>
                <li>Didn't publish port: add <code>-p 8080:8080</code></li>
                <li>Container not running: check <code>docker ps</code></li>
                <li>Firewall blocking port</li>
                <li>Tomcat binding to 127.0.0.1 instead of 0.0.0.0</li>
            </ul>
            
            <h4>Q8: Which container is using port 3000?</h4>
            <pre><code>docker ps
# Check PORTS column</code></pre>
            
            <h4>Q9: How to stop and clean up Tomcat container?</h4>
            <pre><code># Stop container
docker stop tomcat-container

# Remove container
docker rm tomcat-container

# Remove image
docker rmi tomcat</code></pre>
            
            <h4>Q10: Share app with teammate?</h4>
            <p><strong>Method 1: Push to Docker Hub</strong></p>
            <pre><code>docker tag my-app username/my-app:latest
docker push username/my-app:latest

# Teammate pulls:
docker pull username/my-app:latest</code></pre>
            
            <p><strong>Method 2: Save as tar file</strong></p>
            <pre><code># Save
docker save my-app > my-app.tar

# Load (teammate)
docker load < my-app.tar</code></pre>
            
            <h3>Best Practices</h3>
            <ul>
                <li>✓ Use specific image versions (not :latest)</li>
                <li>✓ One service per container</li>
                <li>✓ Use volumes for persistent data</li>
                <li>✓ Use networks to isolate services</li>
                <li>✓ Set restart policies</li>
                <li>✓ Use environment variables for configuration</li>
                <li>✓ Keep docker-compose.yml in version control</li>
            </ul>
        `
    },
    {
        id: 7,
        title: "Multi-Module Maven Project",
        description: "Create parent and child Maven modules, manage dependencies across modules, build multi-module projects.",
        tags: ["Maven", "Multi-Module", "Advanced"],
        content: `
            <h2>Experiment 7: Multi-Module Maven Project</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Understand multi-module Maven project structure</li>
                <li>Create parent and child modules</li>
                <li>Manage dependencies across modules</li>
                <li>Build and package multi-module projects</li>
            </ul>
            
            <h3>What is a Multi-Module Project?</h3>
            <p>A multi-module project is a Maven project that contains multiple sub-projects (modules). The parent project aggregates all modules and manages common configurations and dependencies.</p>
            
            <h3>Project Structure</h3>
            <pre><code>parent-project/
├── pom.xml                 # Parent POM
├── module1/
│   ├── pom.xml            # Module 1 POM
│   └── src/
│       └── main/java/
├── module2/
│   ├── pom.xml            # Module 2 POM
│   └── src/
│       └── main/java/
└── module3/
    ├── pom.xml            # Module 3 POM
    └── src/
        └── main/java/</code></pre>
            
            <h3>Creating Multi-Module Project</h3>
            <p><strong>Note:</strong> Process is same as Experiment 4, but with parent-child structure</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create Parent Project</strong></p>
                <p>In Eclipse: File → New → Maven Project</p>
                <p>Select: maven-archetype-quickstart</p>
                <ul>
                    <li>Group Id: com.example</li>
                    <li>Artifact Id: parent-project</li>
                </ul>
                
                <p><span class="step-number">2</span> <strong>Modify Parent pom.xml</strong></p>
                <p>Change packaging to "pom":</p>
                <pre><code>&lt;project&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.example&lt;/groupId&gt;
  &lt;artifactId&gt;parent-project&lt;/artifactId&gt;
  &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
  &lt;packaging&gt;pom&lt;/packaging&gt;  &lt;!-- Important! --&gt;
  
  &lt;name&gt;parent-project&lt;/name&gt;
  
  &lt;!-- List of modules --&gt;
  &lt;modules&gt;
    &lt;module&gt;module1&lt;/module&gt;
    &lt;module&gt;module2&lt;/module&gt;
  &lt;/modules&gt;
  
  &lt;properties&gt;
    &lt;maven.compiler.source&gt;11&lt;/maven.compiler.source&gt;
    &lt;maven.compiler.target&gt;11&lt;/maven.compiler.target&gt;
  &lt;/properties&gt;
  
  &lt;!-- Dependency Management --&gt;
  &lt;dependencyManagement&gt;
    &lt;dependencies&gt;
      &lt;dependency&gt;
        &lt;groupId&gt;junit&lt;/groupId&gt;
        &lt;artifactId&gt;junit&lt;/artifactId&gt;
        &lt;version&gt;4.13.2&lt;/version&gt;
        &lt;scope&gt;test&lt;/scope&gt;
      &lt;/dependency&gt;
    &lt;/dependencies&gt;
  &lt;/dependencyManagement&gt;
&lt;/project&gt;</code></pre>
                
                <p><span class="step-number">3</span> <strong>Create Child Module 1</strong></p>
                <p>Right-click parent project → New → Maven Module</p>
                <ul>
                    <li>Module Name: module1</li>
                    <li>Parent project: parent-project</li>
                </ul>
                
                <p><span class="step-number">4</span> <strong>Module 1 pom.xml</strong></p>
                <pre><code>&lt;project&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  
  &lt;!-- Parent reference --&gt;
  &lt;parent&gt;
    &lt;groupId&gt;com.example&lt;/groupId&gt;
    &lt;artifactId&gt;parent-project&lt;/artifactId&gt;
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
  &lt;/parent&gt;
  
  &lt;artifactId&gt;module1&lt;/artifactId&gt;
  &lt;packaging&gt;jar&lt;/packaging&gt;
  
  &lt;dependencies&gt;
    &lt;!-- Module-specific dependencies --&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;junit&lt;/groupId&gt;
      &lt;artifactId&gt;junit&lt;/artifactId&gt;
      &lt;!-- Version inherited from parent --&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;</code></pre>
                
                <p><span class="step-number">5</span> <strong>Create Child Module 2</strong></p>
                <p>Same process, create module2</p>
                
                <p><span class="step-number">6</span> <strong>Build Entire Project</strong></p>
                <p>From parent directory:</p>
                <pre><code>mvn clean install</code></pre>
                <p>✓ All modules build in order!</p>
            </div>
            
            <h3>Benefits of Multi-Module Projects</h3>
            <ul>
                <li>✓ Centralized dependency management</li>
                <li>✓ Consistent build configuration</li>
                <li>✓ Single command builds all modules</li>
                <li>✓ Modules can depend on each other</li>
                <li>✓ Easier version management</li>
            </ul>
            
            <h3>Building Specific Modules</h3>
            <pre><code># Build only module1
cd module1
mvn clean install

# Build from parent, only module1
mvn clean install -pl module1

# Build module1 and its dependencies
mvn clean install -pl module1 -am</code></pre>
        `
    },
    {
        id: 8,
        title: "Jenkins Automation",
        description: "Complete Jenkins setup: create pipelines for Maven Java and Web projects, configure build steps, automated testing and deployment.",
        tags: ["Jenkins", "CI/CD", "Automation", "Maven"],
        content: `
            <h2>Experiment 8: Jenkins Automation</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Create Jenkins pipelines for Maven Java projects</li>
                <li>Create Jenkins pipelines for Maven Web projects</li>
                <li>Configure build, test, and deployment steps</li>
                <li>Chain multiple Jenkins jobs together</li>
            </ul>
            
            <h3>Prerequisites</h3>
            <ul>
                <li>Jenkins installed and running on localhost:8888</li>
                <li>Maven configured in Jenkins (MAVEN_HOME)</li>
                <li>Git plugin installed</li>
                <li>Maven projects on GitHub</li>
            </ul>
            
            <h3>Part 1: Maven Java Pipeline</h3>
            
            <h4>Job 1: MavenJava (Build Job)</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Jenkins</strong></p>
                <p>Navigate to: http://localhost:8888</p>
                
                <p><span class="step-number">2</span> <strong>Create New Item</strong></p>
                <p>Click "New Item" on left sidebar</p>
                <ul>
                    <li>Enter name: <code>maven_java</code></li>
                    <li>Select: "Freestyle project"</li>
                    <li>Click "OK"</li>
                </ul>
                
                <p><span class="step-number">3</span> <strong>Add Description</strong></p>
                <p>Description: "Builds Maven Java project from GitHub"</p>
                
                <p><span class="step-number">4</span> <strong>Configure Source Code Management</strong></p>
                <ul>
                    <li>Select: Git</li>
                    <li>Repository URL: https://github.com/username/maven-java-project.git</li>
                    <li>Branch: */main</li>
                </ul>
                
                <p><span class="step-number">5</span> <strong>Add Build Step 1 (Clean)</strong></p>
                <p>Build Steps → Add build step → Invoke top-level Maven targets</p>
                <ul>
                    <li>Maven Version: MAVEN_HOME</li>
                    <li>Goals: <code>clean</code></li>
                </ul>
                
                <p><span class="step-number">6</span> <strong>Add Build Step 2 (Install)</strong></p>
                <p>Add build step → Invoke top-level Maven targets</p>
                <ul>
                    <li>Maven Version: MAVEN_HOME</li>
                    <li>Goals: <code>install</code></li>
                </ul>
                
                <p><span class="step-number">7</span> <strong>Post-Build Action 1 (Archive Artifacts)</strong></p>
                <p>Post-build Actions → Add post-build action → Archive the artifacts</p>
                <ul>
                    <li>Files to archive: <code>**/*</code></li>
                </ul>
                
                <p><span class="step-number">8</span> <strong>Post-Build Action 2 (Build Other Projects)</strong></p>
                <p>Add post-build action → Build other projects</p>
                <ul>
                    <li>Projects to build: <code>MavenJava_Test</code></li>
                    <li>✓ Trigger only if build is stable</li>
                </ul>
                
                <p><span class="step-number">9</span> <strong>Save Configuration</strong></p>
                <p>Click "Apply" then "Save"</p>
                
                <p><span class="step-number">10</span> <strong>Build Now!</strong></p>
                <p>Click "Build Now" on left sidebar</p>
                <p>✓ Build starts!</p>
                
                <p><span class="step-number">11</span> <strong>Check Build Status</strong></p>
                <p>Build History will show:</p>
                <ul>
                    <li>Blue ball = Success ✓</li>
                    <li>Red ball = Failure ✗</li>
                </ul>
                
                <p><span class="step-number">12</span> <strong>View Console Output</strong></p>
                <p>Click build number → Console Output</p>
                <p>Shows complete build logs</p>
            </div>
            
            <h4>Job 2: MavenJava_Test (Test Job)</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create New Item</strong></p>
                <ul>
                    <li>Name: <code>MavenJava_Test</code></li>
                    <li>Type: Freestyle project</li>
                </ul>
                
                <p><span class="step-number">2</span> <strong>Add Description</strong></p>
                <p>"Tests the Maven Java artifacts"</p>
                
                <p><span class="step-number">3</span> <strong>Source Code Management</strong></p>
                <p>Select: None</p>
                
                <p><span class="step-number">4</span> <strong>Build Environment</strong></p>
                <p>✓ Delete workspace before build starts</p>
                
                <p><span class="step-number">5</span> <strong>Build Step (Copy Artifacts)</strong></p>
                <p>Add build step → Copy artifacts from another project</p>
                <ul>
                    <li>Project name: <code>maven_java</code></li>
                    <li>Artifacts to copy: <code>**/*</code></li>
                </ul>
                
                <p><span class="step-number">6</span> <strong>Post-Build Action (Archive)</strong></p>
                <p>Archive the artifacts: <code>**/*</code></p>
                
                <p><span class="step-number">7</span> <strong>Save</strong></p>
                <p>✓ Test job configured!</p>
            </div>
            
            <h4>Create Pipeline View</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Click "+" beside "All"</strong></p>
                <p>On Jenkins dashboard</p>
                
                <p><span class="step-number">2</span> <strong>Create View</strong></p>
                <ul>
                    <li>Name: <code>MavenJava_pipeline</code></li>
                    <li>Type: Build Pipeline View</li>
                    <li>Click "OK"</li>
                </ul>
                
                <p><span class="step-number">3</span> <strong>Configure Pipeline</strong></p>
                <ul>
                    <li>Initial Job: <code>maven_java</code></li>
                    <li>Click "Apply" and "Save"</li>
                </ul>
                
                <p><span class="step-number">4</span> <strong>View Pipeline</strong></p>
                <p>✓ Visual pipeline showing job flow!</p>
            </div>
            
            <h3>Part 2: Maven Web Pipeline</h3>
            
            <h4>Job 1: maven_web_build</h4>
            <p>Same process as maven_java, but:</p>
            <ul>
                <li>Name: <code>maven_web_build</code></li>
                <li>Repository: Your Maven Web project URL</li>
                <li>Trigger: <code>maven_web_test</code></li>
            </ul>
            
            <h4>Job 2: maven_web_test</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create job: maven_web_test</strong></p>
                
                <p><span class="step-number">2</span> <strong>Build Environment</strong></p>
                <p>✓ Delete workspace before build starts</p>
                
                <p><span class="step-number">3</span> <strong>Build Step 1: Copy artifacts from maven_web_build</strong></p>
                
                <p><span class="step-number">4</span> <strong>Build Step 2: Maven test</strong></p>
                <ul>
                    <li>Maven Version: MAVEN_HOME</li>
                    <li>Goals: <code>test</code></li>
                </ul>
                
                <p><span class="step-number">5</span> <strong>Post-Build: Archive artifacts</strong></p>
                
                <p><span class="step-number">6</span> <strong>Post-Build: Trigger maven_web_deploy</strong></p>
                <p>✓ Trigger only if build is stable</p>
            </div>
            
            <h4>Job 3: maven_web_deploy</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create job: maven_web_deploy</strong></p>
                
                <p><span class="step-number">2</span> <strong>Build Step: Copy artifacts from maven_web_test</strong></p>
                
                <p><span class="step-number">3</span> <strong>Post-Build: Deploy war/ear to container</strong></p>
                <p>Post-build Actions → Deploy war/ear to a container</p>
                <ul>
                    <li>WAR/EAR files: <code>**/*.war</code></li>
                    <li>Context path: <code>webpath</code></li>
                    <li>Container: Tomcat 9.x</li>
                    <li>Tomcat URL: http://localhost:8080</li>
                    <li>Credentials: Add tomcat username/password</li>
                </ul>
                
                <p><span class="step-number">4</span> <strong>Save and Build</strong></p>
                <p>✓ Complete CI/CD pipeline!</p>
            </div>
            
            <h3>Viewing Results</h3>
            <ul>
                <li><strong>Build artifacts:</strong> Click job → Latest build → Artifacts</li>
                <li><strong>Test results:</strong> Click job → Test Results</li>
                <li><strong>Console output:</strong> Click build number → Console Output</li>
            </ul>
            
            <h3>Access Deployed Application</h3>
            <p>After successful deployment:</p>
            <pre><code>http://localhost:8080/webpath/</code></pre>
            <p>✓ Your web app is live!</p>
        `
    },
    {
        id: 9,
        title: "Jenkins Build Triggers & GitHub Webhooks",
        description: "Configure automated builds with GitHub webhooks, periodic builds, poll SCM, and upstream/downstream triggers.",
        tags: ["Jenkins", "GitHub", "Webhooks", "Automation"],
        content: `
            <h2>Experiment 9: Jenkins Build Triggers & GitHub Webhooks</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Configure GitHub webhooks to trigger Jenkins builds automatically</li>
                <li>Set up periodic build schedules</li>
                <li>Configure Poll SCM for automatic change detection</li>
                <li>Link upstream and downstream jobs</li>
            </ul>
            
            <h3>Part 1: GitHub Webhook Setup (ngrok)</h3>
            
            <p><strong>Problem:</strong> Jenkins is running on localhost. GitHub needs a public URL to send webhooks.</p>
            <p><strong>Solution:</strong> Use ngrok to expose localhost to the internet temporarily.</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Download ngrok</strong></p>
                <p>Visit: https://ngrok.com/download</p>
                <p>Download and extract ngrok</p>
                
                <p><span class="step-number">2</span> <strong>Sign Up (Optional but recommended)</strong></p>
                <p>Create free account at https://dashboard.ngrok.com/signup</p>
                <p>Get your authtoken</p>
                
                <p><span class="step-number">3</span> <strong>Configure ngrok</strong></p>
                <pre><code>ngrok authtoken YOUR_AUTH_TOKEN</code></pre>
                
                <p><span class="step-number">4</span> <strong>Expose Jenkins Port</strong></p>
                <p>Open Git Bash or Terminal:</p>
                <pre><code>ngrok http 8888</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>ngrok by @inconshreveable
Session Status: online
Forwarding: https://abc123def.ngrok.io -> http://localhost:8888</code></pre>
                <p>✓ Copy the HTTPS URL: <code>https://abc123def.ngrok.io</code></p>
                <p><strong>Note:</strong> Keep this terminal window open!</p>
            </div>
            
            <h4>Configure GitHub Webhook</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Your GitHub Repository</strong></p>
                <p>Navigate to the repo you want to trigger builds from</p>
                
                <p><span class="step-number">2</span> <strong>Go to Settings</strong></p>
                <p>Click "Settings" tab → "Webhooks" (left sidebar)</p>
                
                <p><span class="step-number">3</span> <strong>Add Webhook</strong></p>
                <p>Click "Add webhook"</p>
                
                <p><span class="step-number">4</span> <strong>Configure Webhook</strong></p>
                <ul>
                    <li><strong>Payload URL:</strong> <code>https://abc123def.ngrok.io/github-webhook/</code></li>
                    <li>Replace with YOUR ngrok URL!</li>
                    <li><strong>Content type:</strong> application/json</li>
                    <li><strong>Which events?</strong> Just the push event</li>
                    <li>✓ Active</li>
                </ul>
                
                <p><span class="step-number">5</span> <strong>Add Webhook</strong></p>
                <p>Click "Add webhook"</p>
                <p>✓ GitHub will ping the webhook!</p>
                <p>Green checkmark = Success!</p>
            </div>
            
            <h4>Configure Jenkins Job</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Existing Jenkins Job</strong></p>
                <p>Or create new one (e.g., <code>webhook_maven_java</code>)</p>
                
                <p><span class="step-number">2</span> <strong>Configure Source Code Management</strong></p>
                <ul>
                    <li>Select: Git</li>
                    <li>Repository URL: Your GitHub repo URL</li>
                    <li>Branch: */main</li>
                </ul>
                
                <p><span class="step-number">3</span> <strong>Build Triggers</strong></p>
                <p>✓ GitHub hook trigger for GITScm polling</p>
                
                <p><span class="step-number">4</span> <strong>Save</strong></p>
                <p>Click "Apply" and "Save"</p>
            </div>
            
            <h4>Test the Webhook</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Make a Change in GitHub</strong></p>
                <p>Edit any file in your repository</p>
                <p>Commit the change</p>
                
                <p><span class="step-number">2</span> <strong>Watch Jenkins</strong></p>
                <p>Jenkins dashboard should automatically trigger build!</p>
                <p>✓ Build starts within seconds!</p>
                
                <p><span class="step-number">3</span> <strong>Check Build History</strong></p>
                <p>Build shows: "Started by GitHub push by username"</p>
            </div>
            
            <h3>Part 2: Other Build Triggers</h3>
            
            <h4>Trigger 1: Build Periodically</h4>
            <p><strong>Use Case:</strong> Run builds at scheduled times (e.g., nightly builds)</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Job Configuration</strong></p>
                
                <p><span class="step-number">2</span> <strong>Build Triggers</strong></p>
                <p>✓ Build periodically</p>
                
                <p><span class="step-number">3</span> <strong>Schedule Syntax (Cron)</strong></p>
                <pre><code># Format: MINUTE HOUR DAY MONTH DAYOFWEEK

# Every day at 2 AM
0 2 * * *

# Every hour
0 * * * *

# Every 15 minutes
H/15 * * * *

# Monday to Friday at 9 AM
0 9 * * 1-5

# Every Sunday at midnight
0 0 * * 0</code></pre>
                
                <p><span class="step-number">4</span> <strong>Example: Build every 30 minutes</strong></p>
                <pre><code>H/30 * * * *</code></pre>
                
                <p><span class="step-number">5</span> <strong>Save</strong></p>
                <p>✓ Jenkins will build on schedule!</p>
            </div>
            
            <h4>Trigger 2: Poll SCM</h4>
            <p><strong>Use Case:</strong> Check for changes periodically, build only if changes detected</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Build Triggers</strong></p>
                <p>✓ Poll SCM</p>
                
                <p><span class="step-number">2</span> <strong>Schedule</strong></p>
                <pre><code># Check every 5 minutes
H/5 * * * *

# Check every hour
H * * * *</code></pre>
                
                <p><span class="step-number">3</span> <strong>How it works:</strong></p>
                <ul>
                    <li>Jenkins checks GitHub every 5 minutes</li>
                    <li>If changes found → Build starts</li>
                    <li>If no changes → No build</li>
                </ul>
                <p>✓ More efficient than "Build periodically"!</p>
            </div>
            
            <h4>Trigger 3: Build after other projects</h4>
            <p><strong>Use Case:</strong> Chain jobs together (already covered in Experiment 8)</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Build Triggers</strong></p>
                <p>✓ Build after other projects are built</p>
                
                <p><span class="step-number">2</span> <strong>Projects to watch</strong></p>
                <pre><code>project1, project2</code></pre>
                
                <p><span class="step-number">3</span> <strong>Trigger options:</strong></p>
                <ul>
                    <li>✓ Trigger only if build is stable</li>
                    <li>✓ Trigger even if the build is unstable</li>
                    <li>✓ Trigger even if the build fails</li>
                </ul>
            </div>
            
            <h4>Trigger 4: Trigger builds remotely</h4>
            <p><strong>Use Case:</strong> Trigger builds via URL (useful for external systems)</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Build Triggers</strong></p>
                <p>✓ Trigger builds remotely (e.g., from scripts)</p>
                
                <p><span class="step-number">2</span> <strong>Authentication Token</strong></p>
                <p>Enter token: <code>mytoken123</code></p>
                
                <p><span class="step-number">3</span> <strong>Trigger URL</strong></p>
                <pre><code>http://localhost:8888/job/job-name/build?token=mytoken123</code></pre>
                
                <p><span class="step-number">4</span> <strong>Test from browser or curl</strong></p>
                <pre><code>curl http://localhost:8888/job/job-name/build?token=mytoken123</code></pre>
                <p>✓ Build starts!</p>
            </div>
            
            <h3>Part 3: Post-Build Actions (Email Notifications)</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Install Email Extension Plugin</strong></p>
                <p>Manage Jenkins → Manage Plugins → Available</p>
                <p>Search: "Email Extension Plugin"</p>
                <p>Install and restart</p>
                
                <p><span class="step-number">2</span> <strong>Configure Email</strong></p>
                <p>Manage Jenkins → Configure System</p>
                <p>Extended E-mail Notification section:</p>
                <ul>
                    <li>SMTP server: smtp.gmail.com</li>
                    <li>SMTP Port: 587</li>
                    <li>Use SMTP Authentication: ✓</li>
                    <li>Username: your-email@gmail.com</li>
                    <li>Password: your-app-password</li>
                    <li>Use TLS: ✓</li>
                </ul>
                
                <p><span class="step-number">3</span> <strong>Add Email to Job</strong></p>
                <p>Job Configuration → Post-build Actions</p>
                <p>Add: Editable Email Notification</p>
                <ul>
                    <li>Project Recipient List: email1@example.com, email2@example.com</li>
                    <li>Subject: $PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!</li>
                    <li>Content: Check console output at $BUILD_URL to view the results.</li>
                </ul>
                
                <p><span class="step-number">4</span> <strong>Triggers</strong></p>
                <p>Add triggers:</p>
                <ul>
                    <li>✓ Always (or choose Failure, Success, etc.)</li>
                </ul>
                
                <p><span class="step-number">5</span> <strong>Save and Test</strong></p>
                <p>Build the job</p>
                <p>✓ Email arrives with build results!</p>
            </div>
            
            <h3>Scenario-Based Questions</h3>
            
            <h4>Q1: Build should trigger when code is pushed to GitHub</h4>
            <p><strong>Solution:</strong> GitHub Webhook (as shown above)</p>
            
            <h4>Q2: Run nightly builds at 2 AM every day</h4>
            <p><strong>Solution:</strong></p>
            <pre><code># Build Triggers → Build periodically
0 2 * * *</code></pre>
            
            <h4>Q3: Check for changes every 10 minutes, build only if changes exist</h4>
            <p><strong>Solution:</strong></p>
            <pre><code># Build Triggers → Poll SCM
H/10 * * * *</code></pre>
            
            <h4>Q4: Webhook not working - Build doesn't trigger</h4>
            <p><strong>Troubleshooting:</strong></p>
            <ul>
                <li>✓ Check ngrok is running</li>
                <li>✓ Verify webhook URL in GitHub (should show recent deliveries)</li>
                <li>✓ Check Jenkins job has "GitHub hook trigger" enabled</li>
                <li>✓ Ensure repository URL matches in Jenkins</li>
            </ul>
            
            <h4>Q5: Send email only on build failure</h4>
            <p><strong>Solution:</strong></p>
            <p>Post-build Actions → Editable Email Notification</p>
            <p>Triggers → Add trigger → Failure - Any</p>
            
            <h3>Best Practices</h3>
            <ul>
                <li>✓ Use webhooks for immediate feedback</li>
                <li>✓ Use Poll SCM for repos without webhook access</li>
                <li>✓ Use periodic builds for scheduled tasks (backups, reports)</li>
                <li>✓ Always notify team on build failures</li>
                <li>✓ Keep ngrok running during development (or use paid ngrok for permanent URLs)</li>
            </ul>
        `
    },
    {
        id: 10,
        title: "Jenkins Blue Ocean & Pipelines",
        description: "Learn Blue Ocean interface, create pipeline scripts, Jenkinsfile, declarative vs scripted pipelines, multi-stage builds.",
        tags: ["Jenkins", "Blue Ocean", "Pipeline", "Jenkinsfile"],
        content: `
            <h2>Experiment 10: Jenkins Blue Ocean & Pipelines</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Install and navigate Blue Ocean interface</li>
                <li>Create declarative pipeline scripts</li>
                <li>Write Jenkinsfile for source control</li>
                <li>Build multi-stage pipelines</li>
                <li>Understand pipeline syntax and stages</li>
            </ul>
            
            <h3>What is Blue Ocean?</h3>
            <p>Blue Ocean is a modern, visual interface for Jenkins that makes pipelines easier to understand and debug. It provides a clean, intuitive UI with visual pipeline editor and better feedback.</p>
            
            <h3>Part 1: Installing Blue Ocean</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Jenkins</strong></p>
                <p>Navigate to: http://localhost:8888</p>
                
                <p><span class="step-number">2</span> <strong>Manage Jenkins</strong></p>
                <p>Click "Manage Jenkins" on left sidebar</p>
                
                <p><span class="step-number">3</span> <strong>Manage Plugins</strong></p>
                <p>Click "Manage Plugins"</p>
                
                <p><span class="step-number">4</span> <strong>Install Blue Ocean</strong></p>
                <p>Go to "Available" tab</p>
                <p>Search: "Blue Ocean"</p>
                <p>✓ Blue Ocean</p>
                <p>Click "Install without restart"</p>
                
                <p><span class="step-number">5</span> <strong>Wait for Installation</strong></p>
                <p>Installation progress shows plugins being installed</p>
                <p>✓ Blue Ocean installed successfully!</p>
                
                <p><span class="step-number">6</span> <strong>Return to Dashboard</strong></p>
                <p>Click "Go back to the top page"</p>
                
                <p><span class="step-number">7</span> <strong>Open Blue Ocean</strong></p>
                <p>You'll see "Open Blue Ocean" on left sidebar</p>
                <p>Click it!</p>
                <p>✓ Beautiful modern interface opens!</p>
            </div>
            
            <h3>Part 2: Creating Pipeline (Classic Method)</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create New Item (Classic UI)</strong></p>
                <p>Dashboard → New Item</p>
                <ul>
                    <li>Name: <code>maven_pipeline_bluocean</code></li>
                    <li>Select: Pipeline</li>
                    <li>Click OK</li>
                </ul>
                
                <p><span class="step-number">2</span> <strong>Add Description</strong></p>
                <p>"Maven pipeline for Blue Ocean visualization"</p>
                
                <p><span class="step-number">3</span> <strong>Pipeline Section</strong></p>
                <p>Scroll down to "Pipeline" section</p>
                <p>Definition: Pipeline script</p>
                
                <p><span class="step-number">4</span> <strong>Write Pipeline Script</strong></p>
                <pre><code>pipeline {
    agent any
    
    tools {
        maven 'MAVEN_HOME'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/username/maven-project.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        
        stage('Package') {
            steps {
                sh 'mvn package'
            }
        }
    }
    
    post {
        success {
            echo 'Build succeeded!'
            archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
        }
        failure {
            echo 'Build failed!'
        }
    }
}</code></pre>
                
                <p><span class="step-number">5</span> <strong>Save Pipeline</strong></p>
                <p>Click "Save"</p>
                
                <p><span class="step-number">6</span> <strong>Build Now</strong></p>
                <p>Click "Build Now"</p>
                <p>✓ Pipeline executes!</p>
                
                <p><span class="step-number">7</span> <strong>View in Blue Ocean</strong></p>
                <p>Click "Open Blue Ocean" (left sidebar)</p>
                <p>✓ Beautiful visual pipeline with stages!</p>
            </div>
            
            <h3>Part 3: Understanding Pipeline Syntax</h3>
            
            <h4>Basic Structure</h4>
            <pre><code>pipeline {
    agent any           // Where to run
    
    tools {            // Build tools
        maven 'MAVEN_HOME'
        jdk 'JDK11'
    }
    
    environment {      // Environment variables
        APP_NAME = 'MyApp'
        VERSION = '1.0'
    }
    
    stages {           // Build stages
        stage('Stage Name') {
            steps {
                // Commands
            }
        }
    }
    
    post {             // After build
        always {
            // Always runs
        }
        success {
            // On success
        }
        failure {
            // On failure
        }
    }
}</code></pre>
            
            <h4>Common Pipeline Steps</h4>
            <pre><code>// Git checkout
git branch: 'main', url: 'https://github.com/user/repo.git'

// Execute shell command (Linux/Mac)
sh 'mvn clean install'

// Execute batch command (Windows)
bat 'mvn clean install'

// Echo message
echo 'Building the project...'

// Archive artifacts
archiveArtifacts artifacts: '**/target/*.jar'

// Publish test results
junit '**/target/surefire-reports/*.xml'

// Timeout
timeout(time: 5, unit: 'MINUTES') {
    sh 'mvn test'
}

// Retry on failure
retry(3) {
    sh 'curl http://api.example.com'
}</code></pre>
            
            <h3>Part 4: Jenkinsfile (Pipeline from SCM)</h3>
            
            <p><strong>Benefit:</strong> Store pipeline code in version control!</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create Jenkinsfile in your project</strong></p>
                <p>In your GitHub repository root, create file: <code>Jenkinsfile</code></p>
                
                <p><span class="step-number">2</span> <strong>Write Jenkinsfile content</strong></p>
                <pre><code>pipeline {
    agent any
    
    tools {
        maven 'MAVEN_HOME'
    }
    
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'mvn test'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'mvn package'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
    }
}</code></pre>
                
                <p><span class="step-number">3</span> <strong>Commit and Push Jenkinsfile</strong></p>
                <pre><code>git add Jenkinsfile
git commit -m "Add Jenkinsfile"
git push origin main</code></pre>
                
                <p><span class="step-number">4</span> <strong>Create Pipeline Job in Jenkins</strong></p>
                <p>New Item → Pipeline</p>
                <p>Name: <code>maven_jenkinsfile_pipeline</code></p>
                
                <p><span class="step-number">5</span> <strong>Configure Pipeline</strong></p>
                <p>Pipeline section:</p>
                <ul>
                    <li>Definition: Pipeline script from SCM</li>
                    <li>SCM: Git</li>
                    <li>Repository URL: Your GitHub repo</li>
                    <li>Branch: */main</li>
                    <li>Script Path: Jenkinsfile</li>
                </ul>
                
                <p><span class="step-number">6</span> <strong>Save and Build</strong></p>
                <p>✓ Jenkins reads Jenkinsfile from GitHub!</p>
                <p>✓ Any changes to Jenkinsfile automatically reflected!</p>
            </div>
            
            <h3>Part 5: Advanced Pipeline Examples</h3>
            
            <h4>Example 1: Multi-Branch Pipeline</h4>
            <pre><code>pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'main') {
                        echo 'Building main branch'
                        sh 'mvn clean package'
                    } else if (env.BRANCH_NAME == 'develop') {
                        echo 'Building develop branch'
                        sh 'mvn clean compile'
                    } else {
                        echo 'Building feature branch'
                        sh 'mvn clean test'
                    }
                }
            }
        }
    }
}</code></pre>
            
            <h4>Example 2: Parallel Execution</h4>
            <pre><code>pipeline {
    agent any
    
    stages {
        stage('Parallel Tests') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh 'mvn test -Dtest=UnitTests'
                    }
                }
                stage('Integration Tests') {
                    steps {
                        sh 'mvn test -Dtest=IntegrationTests'
                    }
                }
                stage('Code Quality') {
                    steps {
                        sh 'mvn sonar:sonar'
                    }
                }
            }
        }
    }
}</code></pre>
            
            <h4>Example 3: Input Step (Manual Approval)</h4>
            <pre><code>pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'mvn package'
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                sh 'deploy-to-staging.sh'
            }
        }
        
        stage('Approval') {
            steps {
                input message: 'Deploy to production?',
                      ok: 'Deploy'
            }
        }
        
        stage('Deploy to Production') {
            steps {
                sh 'deploy-to-production.sh'
            }
        }
    }
}</code></pre>
            
            <h3>Blue Ocean Features</h3>
            <ul>
                <li><strong>Visual Pipeline Editor:</strong> Create pipelines with drag-and-drop</li>
                <li><strong>Pipeline Visualization:</strong> See stages, steps, and timing</li>
                <li><strong>Quick Navigation:</strong> Click any stage to see logs</li>
                <li><strong>Git Integration:</strong> View commits that triggered builds</li>
                <li><strong>Artifacts:</strong> Download build artifacts directly</li>
                <li><strong>Test Results:</strong> Visual test result summaries</li>
            </ul>
            
            <h3>Scenario-Based Questions</h3>
            
            <h4>Q1: Deploy only if all tests pass</h4>
            <pre><code>stage('Test') {
    steps {
        sh 'mvn test'
    }
}
stage('Deploy') {
    when {
        branch 'main'
        expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
    }
    steps {
        sh 'deploy.sh'
    }
}</code></pre>
            
            <h4>Q2: Send email on pipeline failure</h4>
            <pre><code>post {
    failure {
        emailext to: 'team@example.com',
                 subject: "Pipeline Failed: \${env.JOB_NAME}",
                 body: "Check console: \${env.BUILD_URL}"
    }
}</code></pre>
            
            <h4>Q3: Build timeout after 10 minutes</h4>
            <pre><code>pipeline {
    agent any
    
    options {
        timeout(time: 10, unit: 'MINUTES')
    }
    
    stages {
        // ...
    }
}</code></pre>
            
            <h3>Best Practices</h3>
            <ul>
                <li>✓ Store Jenkinsfile in source control</li>
                <li>✓ Use descriptive stage names</li>
                <li>✓ Break pipeline into logical stages</li>
                <li>✓ Use post actions for notifications</li>
                <li>✓ Add timeouts to prevent stuck builds</li>
                <li>✓ Archive important artifacts</li>
                <li>✓ Use Blue Ocean for better visualization</li>
            </ul>
        `
    },
    {
        id: 11,
        title: "Jenkins Master-Slave Architecture",
        description: "Configure Jenkins distributed builds with master and slave nodes for parallel execution and load distribution.",
        tags: ["Jenkins", "Distributed", "Master-Slave", "Nodes"],
        content: `
            <h2>Experiment 11: Jenkins Master-Slave Architecture</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Understand master-slave architecture in Jenkins</li>
                <li>Configure Jenkins slave nodes</li>
                <li>Distribute builds across multiple agents</li>
                <li>Set up labels and executors</li>
            </ul>
            
            <h3>What is Master-Slave Architecture?</h3>
            <p><strong>Master (Controller):</strong> Central Jenkins server that:</p>
            <ul>
                <li>Manages configuration and scheduling</li>
                <li>Monitors builds and results</li>
                <li>Serves the Jenkins UI</li>
            </ul>
            
            <p><strong>Slave (Agent/Node):</strong> Worker machines that:</p>
            <ul>
                <li>Execute build jobs</li>
                <li>Can have different operating systems</li>
                <li>Run multiple executors (parallel builds)</li>
            </ul>
            
            <h3>Why Use Master-Slave?</h3>
            <ul>
                <li>✓ <strong>Parallel Execution:</strong> Run multiple builds simultaneously</li>
                <li>✓ <strong>Load Distribution:</strong> Distribute workload across machines</li>
                <li>✓ <strong>Platform Diversity:</strong> Build on different OS (Windows, Linux, Mac)</li>
                <li>✓ <strong>Isolation:</strong> Separate environments for different projects</li>
                <li>✓ <strong>Scalability:</strong> Add more nodes as needed</li>
            </ul>
            
            <h3>Part 1: Adding a Slave Node</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Jenkins</strong></p>
                <p>Navigate to: http://localhost:8888</p>
                
                <p><span class="step-number">2</span> <strong>Manage Jenkins</strong></p>
                <p>Click "Manage Jenkins" on left sidebar</p>
                
                <p><span class="step-number">3</span> <strong>Manage Nodes and Clouds</strong></p>
                <p>Click "Manage Nodes and Clouds"</p>
                <p>You'll see "Built-In Node" (master)</p>
                
                <p><span class="step-number">4</span> <strong>New Node</strong></p>
                <p>Click "New Node" (left sidebar)</p>
                <ul>
                    <li>Node name: <code>slave1</code></li>
                    <li>Type: Permanent Agent</li>
                    <li>Click "OK"</li>
                </ul>
                
                <p><span class="step-number">5</span> <strong>Configure Node</strong></p>
                
                <p><strong>Name:</strong> slave1</p>
                
                <p><strong>Description:</strong> Windows Slave Node for Maven builds</p>
                
                <p><strong>Number of executors:</strong> 2</p>
                <p>(Number of parallel builds this node can handle)</p>
                
                <p><strong>Remote root directory:</strong> C:\Jenkins\slave1</p>
                <p>(Directory on slave machine where Jenkins will store files)</p>
                
                <p><strong>Labels:</strong> windows maven</p>
                <p>(Tags to identify this node - used to assign specific jobs)</p>
                
                <p><strong>Usage:</strong> Use this node as much as possible</p>
                
                <p><strong>Launch method:</strong> Launch agent by connecting it to the master</p>
                
                <p><span class="step-number">6</span> <strong>Save</strong></p>
                <p>Click "Save"</p>
            </div>
            
            <h3>Part 2: Connecting the Slave</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>View Node Page</strong></p>
                <p>After saving, you'll see instructions for connecting the agent</p>
                
                <p><span class="step-number">2</span> <strong>Download agent.jar</strong></p>
                <p>Click the link to download <code>agent.jar</code></p>
                <p>Save it to: <code>C:\Jenkins\slave1\</code></p>
                
                <p><span class="step-number">3</span> <strong>Copy Connection Command</strong></p>
                <p>Jenkins shows a command like:</p>
                <pre><code>java -jar agent.jar -jnlpUrl http://localhost:8888/computer/slave1/slave-agent.jnlp -secret abc123def456 -workDir "C:\Jenkins\slave1"</code></pre>
                
                <p><span class="step-number">4</span> <strong>Create Directory on Slave</strong></p>
                <p>On the slave machine (can be same computer for testing):</p>
                <pre><code>mkdir C:\Jenkins\slave1</code></pre>
                
                <p><span class="step-number">5</span> <strong>Run Agent on Slave Machine</strong></p>
                <p>Open Command Prompt on slave machine:</p>
                <pre><code>cd C:\Jenkins\slave1
java -jar agent.jar -jnlpUrl http://localhost:8888/computer/slave1/slave-agent.jnlp -secret YOUR_SECRET -workDir "C:\Jenkins\slave1"</code></pre>
                
                <p><span class="step-number">6</span> <strong>Agent Connects!</strong></p>
                <p><strong>Output:</strong></p>
                <pre><code>INFO: Connected
INFO: Agent successfully connected and online</code></pre>
                <p>✓ Slave is online!</p>
                
                <p><span class="step-number">7</span> <strong>Verify in Jenkins</strong></p>
                <p>Go back to Jenkins → Manage Nodes</p>
                <p>slave1 should show status: ✓ (green)</p>
                <p>✓ Slave connected successfully!</p>
            </div>
            
            <h3>Part 3: Running Jobs on Slave</h3>
            
            <h4>Method 1: Restrict to Specific Label</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open/Create Job</strong></p>
                <p>Create new or open existing job</p>
                
                <p><span class="step-number">2</span> <strong>General Section</strong></p>
                <p>✓ Restrict where this project can be run</p>
                <p>Label Expression: <code>windows</code> or <code>slave1</code></p>
                
                <p><span class="step-number">3</span> <strong>Save and Build</strong></p>
                <p>✓ Job runs on slave1!</p>
            </div>
            
            <h4>Method 2: Pipeline with Agent Label</h4>
            <pre><code>pipeline {
    agent {
        label 'windows'
    }
    
    stages {
        stage('Build on Windows Slave') {
            steps {
                echo "Running on \${env.NODE_NAME}"
                bat 'mvn clean package'
            }
        }
    }
}</code></pre>
            
            <h4>Method 3: Different Stages on Different Nodes</h4>
            <pre><code>pipeline {
    agent none
    
    stages {
        stage('Build on Windows') {
            agent {
                label 'windows'
            }
            steps {
                echo 'Building on Windows'
                bat 'mvn clean compile'
            }
        }
        
        stage('Test on Linux') {
            agent {
                label 'linux'
            }
            steps {
                echo 'Testing on Linux'
                sh 'mvn test'
            }
        }
    }
}</code></pre>
            
            <h3>Part 4: Managing Multiple Slaves</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Add More Slaves</strong></p>
                <p>Repeat the "Adding Slave" process</p>
                <ul>
                    <li>slave1 (Windows, labels: windows maven)</li>
                    <li>slave2 (Linux, labels: linux docker)</li>
                    <li>slave3 (Mac, labels: mac ios)</li>
                </ul>
                
                <p><span class="step-number">2</span> <strong>View All Nodes</strong></p>
                <p>Manage Jenkins → Manage Nodes and Clouds</p>
                <p>Shows all connected nodes and their status</p>
                
                <p><span class="step-number">3</span> <strong>Monitor Build Queue</strong></p>
                <p>Dashboard shows which builds are running on which nodes</p>
            </div>
            
            <h3>Node Management Commands</h3>
            
            <h4>Taking Node Offline</h4>
            <p>Manage Nodes → Click node → "Mark this node temporarily offline"</p>
            <p>Reason: "Maintenance"</p>
            <p>✓ No new builds will start on this node</p>
            
            <h4>Bringing Node Online</h4>
            <p>Click node → "Bring this node back online"</p>
            
            <h4>Disconnecting Slave</h4>
            <p>On slave machine: Stop the agent process (Ctrl+C)</p>
            
            <h3>Slave Launch Methods</h3>
            
            <h4>1. Launch agent by connecting it to master (JNLP)</h4>
            <ul>
                <li>✓ Works through firewalls</li>
                <li>✓ Slave initiates connection</li>
                <li>✓ Good for Windows</li>
            </ul>
            
            <h4>2. Launch agent via SSH</h4>
            <ul>
                <li>✓ Master connects to slave via SSH</li>
                <li>✓ Good for Linux/Mac</li>
                <li>Requires SSH key setup</li>
            </ul>
            
            <h4>3. Launch agent via execution of command on master</h4>
            <ul>
                <li>✓ Custom script to launch agent</li>
                <li>✓ Advanced scenarios</li>
            </ul>
            
            <h3>Scenario-Based Questions</h3>
            
            <h4>Q1: Run Maven builds on Windows, Docker builds on Linux</h4>
            <p><strong>Solution:</strong></p>
            <pre><code>// Maven job
Label Expression: windows maven

// Docker job
Label Expression: linux docker</code></pre>
            
            <h4>Q2: Slave shows "offline" - troubleshooting</h4>
            <p><strong>Possible causes:</strong></p>
            <ul>
                <li>Agent process stopped → Restart agent.jar</li>
                <li>Network connectivity → Check firewall</li>
                <li>Wrong secret key → Re-check connection command</li>
                <li>Directory permissions → Verify slave directory access</li>
            </ul>
            
            <h4>Q3: Run the same job on 3 different operating systems</h4>
            <pre><code>pipeline {
    agent none
    
    stages {
        stage('Multi-OS Build') {
            parallel {
                stage('Windows') {
                    agent { label 'windows' }
                    steps {
                        bat 'mvn clean package'
                    }
                }
                stage('Linux') {
                    agent { label 'linux' }
                    steps {
                        sh 'mvn clean package'
                    }
                }
                stage('Mac') {
                    agent { label 'mac' }
                    steps {
                        sh 'mvn clean package'
                    }
                }
            }
        }
    }
}</code></pre>
            
            <h4>Q4: Builds waiting in queue despite free executors</h4>
            <p><strong>Problem:</strong> Job restricted to specific label, but that node is busy</p>
            <p><strong>Solution:</strong></p>
            <ul>
                <li>Add more nodes with that label</li>
                <li>Increase executors on existing node</li>
                <li>Remove label restriction if not necessary</li>
            </ul>
            
            <h3>Best Practices</h3>
            <ul>
                <li>✓ Use labels to organize nodes by capability</li>
                <li>✓ Don't run jobs on master (reserve for management)</li>
                <li>✓ Set executors based on CPU cores</li>
                <li>✓ Use descriptive node names</li>
                <li>✓ Monitor node disk space</li>
                <li>✓ Keep agent.jar updated</li>
                <li>✓ Use SSH for Linux/Mac slaves</li>
                <li>✓ Document node configurations</li>
            </ul>
            
            <h3>Master Configuration</h3>
            <p><strong>Reduce master executors to 0:</strong></p>
            <p>Manage Jenkins → Configure System</p>
            <p># of executors: 0</p>
            <p>This prevents jobs from running on master, keeping it for management only.</p>
        `
    },
    {
        id: 12,
        title: "Kubernetes with Minikube",
        description: "Install Minikube, create Kubernetes pods, deploy Nginx server, manage containers with kubectl commands.",
        tags: ["Kubernetes", "Minikube", "Pods", "Nginx", "kubectl"],
        content: `
            <h2>Experiment 12: Kubernetes with Minikube</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Install and configure Minikube</li>
                <li>Understand Kubernetes basic concepts</li>
                <li>Create and manage pods</li>
                <li>Deploy Nginx server on Kubernetes</li>
                <li>Use kubectl commands effectively</li>
            </ul>
            
            <h3>What is Kubernetes?</h3>
            <p>Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.</p>
            
            <h3>What is Minikube?</h3>
            <p>Minikube is a lightweight Kubernetes implementation that creates a local Kubernetes cluster on your machine for learning and development.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li><strong>Pod:</strong> Smallest deployable unit, contains one or more containers</li>
                <li><strong>Node:</strong> Worker machine (physical or virtual)</li>
                <li><strong>Cluster:</strong> Set of nodes running containerized applications</li>
                <li><strong>Service:</strong> Exposes pods to network traffic</li>
                <li><strong>Deployment:</strong> Manages pod replicas and updates</li>
            </ul>
            
            <h3>Part 1: Installing Minikube</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Prerequisites</strong></p>
                <ul>
                    <li>Docker Desktop installed and running</li>
                    <li>Or VirtualBox/Hyper-V installed</li>
                    <li>Minimum 2GB RAM available</li>
                    <li>2 CPUs or more</li>
                </ul>
                
                <p><span class="step-number">2</span> <strong>Download Minikube (Windows)</strong></p>
                <p>Visit: https://minikube.sigs.k8s.io/docs/start/</p>
                <p>Download Windows installer</p>
                <p>Or use PowerShell:</p>
                <pre><code>New-Item -Path 'c:\' -Name 'minikube' -ItemType Directory -Force
Invoke-WebRequest -OutFile 'c:\minikube\minikube.exe' -Uri 'https://github.com/kubernetes/minikube/releases/latest/download/minikube-windows-amd64.exe' -UseBasicParsing</code></pre>
                
                <p><span class="step-number">3</span> <strong>Add to PATH</strong></p>
                <p>Add <code>C:\minikube</code> to system PATH</p>
                
                <p><span class="step-number">4</span> <strong>Install kubectl (if not installed)</strong></p>
                <p>Minikube can install kubectl for you:</p>
                <pre><code>minikube kubectl -- version</code></pre>
                
                <p><span class="step-number">5</span> <strong>Verify Installation</strong></p>
                <pre><code>minikube version</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>minikube version: v1.31.2</code></pre>
                <p>✓ Minikube installed!</p>
            </div>
            
            <h3>Part 2: Starting Minikube</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Start Minikube Cluster</strong></p>
                <pre><code>minikube start</code></pre>
                <p><strong>What happens:</strong></p>
                <ul>
                    <li>Downloads Kubernetes components</li>
                    <li>Creates virtual machine</li>
                    <li>Configures kubectl</li>
                    <li>Starts Kubernetes cluster</li>
                </ul>
                <p><strong>Output:</strong></p>
                <pre><code>😄  minikube v1.31.2 on Windows 10
✨  Using the docker driver based on existing profile
👍  Starting control plane node minikube in cluster minikube
🏃  Updating the running docker "minikube" container ...
🐳  Preparing Kubernetes v1.27.4 on Docker 24.0.4 ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster</code></pre>
                <p>✓ Cluster started! (may take 2-5 minutes first time)</p>
                
                <p><span class="step-number">2</span> <strong>Check Status</strong></p>
                <pre><code>minikube status</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured</code></pre>
                <p>✓ All services running!</p>
                
                <p><span class="step-number">3</span> <strong>Check kubectl Connection</strong></p>
                <pre><code>kubectl version --short</code></pre>
                <p>Shows client and server versions</p>
                
                <p><span class="step-number">4</span> <strong>View Cluster Info</strong></p>
                <pre><code>kubectl cluster-info</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>Kubernetes control plane is running at https://192.168.49.2:8443
CoreDNS is running at https://192.168.49.2:8443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy</code></pre>
            </div>
            
            <h3>Part 3: Creating Your First Pod</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create Nginx Pod</strong></p>
                <pre><code>kubectl run nginx-pod --image=nginx --port=80</code></pre>
                <p><strong>Breaking down the command:</strong></p>
                <ul>
                    <li><code>kubectl run</code> = Create and run pod</li>
                    <li><code>nginx-pod</code> = Name of pod</li>
                    <li><code>--image=nginx</code> = Use nginx Docker image</li>
                    <li><code>--port=80</code> = Container port</li>
                </ul>
                <p><strong>Output:</strong></p>
                <pre><code>pod/nginx-pod created</code></pre>
                <p>✓ Pod created!</p>
                
                <p><span class="step-number">2</span> <strong>View Pods</strong></p>
                <pre><code>kubectl get pods</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>NAME        READY   STATUS    RESTARTS   AGE
nginx-pod   1/1     Running   0          30s</code></pre>
                <p>✓ Pod is running!</p>
                
                <p><span class="step-number">3</span> <strong>Get Detailed Pod Info</strong></p>
                <pre><code>kubectl describe pod nginx-pod</code></pre>
                <p>Shows comprehensive details: IP, image, events, etc.</p>
                
                <p><span class="step-number">4</span> <strong>View Pod Logs</strong></p>
                <pre><code>kubectl logs nginx-pod</code></pre>
                <p>Shows nginx access and error logs</p>
            </div>
            
            <h3>Part 4: Exposing the Pod (Service)</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Expose Pod as Service</strong></p>
                <pre><code>kubectl expose pod nginx-pod --type=NodePort --port=80</code></pre>
                <p><strong>What this does:</strong> Makes pod accessible from outside cluster</p>
                <p><strong>Output:</strong></p>
                <pre><code>service/nginx-pod exposed</code></pre>
                
                <p><span class="step-number">2</span> <strong>View Services</strong></p>
                <pre><code>kubectl get services</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
kubernetes   ClusterIP   10.96.0.1       &lt;none&gt;        443/TCP        10m
nginx-pod    NodePort    10.96.123.45    &lt;none&gt;        80:30123/TCP   10s</code></pre>
                <p>Note the port: 30123 (your port may differ)</p>
                
                <p><span class="step-number">3</span> <strong>Get Minikube Service URL</strong></p>
                <pre><code>minikube service nginx-pod --url</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>http://192.168.49.2:30123</code></pre>
                
                <p><span class="step-number">4</span> <strong>Open in Browser</strong></p>
                <pre><code>minikube service nginx-pod</code></pre>
                <p>Automatically opens browser!</p>
                <p>✓ Nginx welcome page appears!</p>
            </div>
            
            <h3>Part 5: Using YAML for Pod Creation</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create nginx-pod.yaml</strong></p>
                <pre><code>apiVersion: v1
kind: Pod
metadata:
  name: nginx-yaml-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80</code></pre>
                
                <p><span class="step-number">2</span> <strong>Apply Configuration</strong></p>
                <pre><code>kubectl apply -f nginx-pod.yaml</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>pod/nginx-yaml-pod created</code></pre>
                
                <p><span class="step-number">3</span> <strong>Verify</strong></p>
                <pre><code>kubectl get pods</code></pre>
                <p>Both nginx-pod and nginx-yaml-pod are running!</p>
            </div>
            
            <h3>Part 6: Creating a Deployment</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Create Deployment</strong></p>
                <pre><code>kubectl create deployment nginx-deployment --image=nginx --replicas=3</code></pre>
                <p>Creates 3 replica pods!</p>
                
                <p><span class="step-number">2</span> <strong>View Deployment</strong></p>
                <pre><code>kubectl get deployments</code></pre>
                <p><strong>Output:</strong></p>
                <pre><code>NAME               READY   UP-TO-DATE   AVAILABLE   AGE
nginx-deployment   3/3     3            3           20s</code></pre>
                
                <p><span class="step-number">3</span> <strong>View Pods Created by Deployment</strong></p>
                <pre><code>kubectl get pods</code></pre>
                <p>Shows 3 nginx pods with auto-generated names</p>
                
                <p><span class="step-number">4</span> <strong>Scale Deployment</strong></p>
                <pre><code>kubectl scale deployment nginx-deployment --replicas=5</code></pre>
                <p>✓ Now 5 pods running!</p>
            </div>
            
            <h3>Essential kubectl Commands</h3>
            
            <h4>Pod Management</h4>
            <pre><code># List all pods
kubectl get pods

# List pods with more details
kubectl get pods -o wide

# Describe specific pod
kubectl describe pod pod-name

# View pod logs
kubectl logs pod-name

# Follow logs in real-time
kubectl logs -f pod-name

# Execute command in pod
kubectl exec -it pod-name -- /bin/bash

# Delete pod
kubectl delete pod pod-name</code></pre>
            
            <h4>Deployment Management</h4>
            <pre><code># Create deployment
kubectl create deployment name --image=image-name

# List deployments
kubectl get deployments

# Scale deployment
kubectl scale deployment name --replicas=5

# Update image
kubectl set image deployment/name container=new-image

# Rollback deployment
kubectl rollout undo deployment/name

# Delete deployment
kubectl delete deployment name</code></pre>
            
            <h4>Service Management</h4>
            <pre><code># Expose deployment
kubectl expose deployment name --type=NodePort --port=80

# List services
kubectl get services

# Describe service
kubectl describe service name

# Delete service
kubectl delete service name</code></pre>
            
            <h4>Cluster Management</h4>
            <pre><code># View cluster info
kubectl cluster-info

# View nodes
kubectl get nodes

# Describe node
kubectl describe node node-name

# View all resources
kubectl get all

# View namespaces
kubectl get namespaces</code></pre>
            
            <h3>Minikube Commands</h3>
            <pre><code># Start cluster
minikube start

# Stop cluster
minikube stop

# Delete cluster
minikube delete

# View status
minikube status

# View dashboard
minikube dashboard

# SSH into minikube
minikube ssh

# Get service URL
minikube service service-name --url

# Open service in browser
minikube service service-name

# View addons
minikube addons list

# Enable addon
minikube addons enable ingress

# View logs
minikube logs</code></pre>
            
            <h3>Scenario-Based Questions</h3>
            
            <h4>Q1: Pod stuck in "Pending" status</h4>
            <p><strong>Troubleshooting:</strong></p>
            <pre><code># Check pod details
kubectl describe pod pod-name

# Common causes:
# - Insufficient resources
# - Image pull errors
# - Node not ready

# Check node resources
kubectl top nodes

# Check events
kubectl get events --sort-by=.metadata.creationTimestamp</code></pre>
            
            <h4>Q2: How to update nginx version in running pod?</h4>
            <p><strong>Solution:</strong></p>
            <pre><code># For deployment (recommended):
kubectl set image deployment/nginx-deployment nginx=nginx:1.21

# Verify rollout
kubectl rollout status deployment/nginx-deployment

# For standalone pod: Delete and recreate
kubectl delete pod nginx-pod
kubectl run nginx-pod --image=nginx:1.21</code></pre>
            
            <h4>Q3: Access pod without exposing service</h4>
            <p><strong>Solution: Port forwarding</strong></p>
            <pre><code>kubectl port-forward pod/nginx-pod 8080:80

# Then access: http://localhost:8080</code></pre>
            
            <h4>Q4: Run commands inside running pod</h4>
            <p><strong>Solution:</strong></p>
            <pre><code># Interactive shell
kubectl exec -it nginx-pod -- /bin/bash

# Single command
kubectl exec nginx-pod -- ls /usr/share/nginx/html

# Check nginx config
kubectl exec nginx-pod -- cat /etc/nginx/nginx.conf</code></pre>
            
            <h3>Kubernetes Dashboard</h3>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Dashboard</strong></p>
                <pre><code>minikube dashboard</code></pre>
                <p>✓ Opens beautiful web UI in browser!</p>
                
                <p><span class="step-number">2</span> <strong>Features:</strong></p>
                <ul>
                    <li>Visual representation of pods, deployments, services</li>
                    <li>Resource usage graphs</li>
                    <li>Logs viewer</li>
                    <li>YAML editor</li>
                    <li>Create resources via UI</li>
                </ul>
            </div>
            
            <h3>Stopping and Cleanup</h3>
            <pre><code># Delete specific resources
kubectl delete pod nginx-pod
kubectl delete service nginx-pod
kubectl delete deployment nginx-deployment

# Stop Minikube (preserves cluster)
minikube stop

# Delete Minikube cluster completely
minikube delete

# Delete all resources in namespace
kubectl delete all --all</code></pre>
            
            <h3>Best Practices</h3>
            <ul>
                <li>✓ Use deployments instead of standalone pods for production</li>
                <li>✓ Always specify resource limits</li>
                <li>✓ Use labels to organize resources</li>
                <li>✓ Store configurations in YAML files</li>
                <li>✓ Use kubectl apply instead of create (idempotent)</li>
                <li>✓ Monitor pod health with liveness/readiness probes</li>
                <li>✓ Stop Minikube when not in use to save resources</li>
            </ul>
        `
    },
    {
        id: 13,
        title: "AWS EC2 - Deploy Web Application",
        description: "Create AWS EC2 instance, configure security groups, deploy web application, set up Elastic IP, use User Data for automation.",
        tags: ["AWS", "EC2", "Cloud", "Deployment"],
        content: `
            <h2>Experiment 13: AWS EC2 - Deploy Web Application</h2>
            
            <h3>📋 Objectives</h3>
            <ul>
                <li>Create and configure AWS EC2 instance</li>
                <li>Set up security groups for web access</li>
                <li>Deploy web application on EC2</li>
                <li>Configure Elastic IP for static address</li>
                <li>Use User Data for automated setup</li>
            </ul>
            
            <h3>What is AWS EC2?</h3>
            <p><strong>Amazon Elastic Compute Cloud (EC2)</strong> provides scalable virtual servers (instances) in the cloud. You can:</p>
            <ul>
                <li>Launch virtual machines with various operating systems</li>
                <li>Scale capacity up or down based on requirements</li>
                <li>Pay only for what you use</li>
                <li>Deploy applications without physical hardware</li>
            </ul>
            
            <h3>Prerequisites</h3>
            <ul>
                <li>AWS Account (Free Tier available)</li>
                <li>Credit/Debit card for verification</li>
                <li>Basic understanding of Linux commands</li>
            </ul>
            
            <h3>Part 1: Creating AWS Account</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Visit AWS</strong></p>
                <p>Navigate to: https://aws.amazon.com</p>
                
                <p><span class="step-number">2</span> <strong>Create Account</strong></p>
                <p>Click "Create an AWS Account"</p>
                <ul>
                    <li>Enter email address</li>
                    <li>Choose account name</li>
                    <li>Create password</li>
                </ul>
                
                <p><span class="step-number">3</span> <strong>Contact Information</strong></p>
                <ul>
                    <li>Select: Personal account</li>
                    <li>Fill in personal details</li>
                    <li>Phone number for verification</li>
                </ul>
                
                <p><span class="step-number">4</span> <strong>Payment Information</strong></p>
                <p>Add credit/debit card (required for verification)</p>
                <p><strong>Note:</strong> Free tier available - won't be charged if staying within limits</p>
                
                <p><span class="step-number">5</span> <strong>Identity Verification</strong></p>
                <p>Phone verification via call or SMS</p>
                
                <p><span class="step-number">6</span> <strong>Select Support Plan</strong></p>
                <p>Choose: Basic Support (Free)</p>
                
                <p><span class="step-number">7</span> <strong>Sign In</strong></p>
                <p>✓ Account created! Sign in to AWS Console</p>
            </div>
            
            <h3>Part 2: Launching EC2 Instance</h3>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open AWS Management Console</strong></p>
                <p>Sign in to: https://console.aws.amazon.com</p>
                
                <p><span class="step-number">2</span> <strong>Select Region</strong></p>
                <p>Top-right corner → Select region (e.g., US East - N. Virginia)</p>
                <p><strong>Note:</strong> Choose region closest to you for better performance</p>
                
                <p><span class="step-number">3</span> <strong>Navigate to EC2</strong></p>
                <p>Search bar → Type "EC2" → Click "EC2"</p>
                <p>Or: Services → Compute → EC2</p>
                
                <p><span class="step-number">4</span> <strong>Launch Instance</strong></p>
                <p>Click orange "Launch instance" button</p>
                
                <p><span class="step-number">5</span> <strong>Name Your Instance</strong></p>
                <p>Name: <code>MyWebServer</code></p>
                
                <p><span class="step-number">6</span> <strong>Choose AMI (Amazon Machine Image)</strong></p>
                <ul>
                    <li>Select: <strong>Amazon Linux 2023 AMI</strong></li>
                    <li>Or: <strong>Ubuntu Server 22.04 LTS</strong></li>
                    <li>Architecture: 64-bit (x86)</li>
                    <li>✓ Free tier eligible</li>
                </ul>
                
                <p><span class="step-number">7</span> <strong>Choose Instance Type</strong></p>
                <ul>
                    <li>Select: <strong>t2.micro</strong></li>
                    <li>1 vCPU, 1 GB Memory</li>
                    <li>✓ Free tier eligible (750 hours/month)</li>
                </ul>
                
                <p><span class="step-number">8</span> <strong>Create Key Pair</strong></p>
                <p>Click "Create new key pair"</p>
                <ul>
                    <li>Key pair name: <code>mywebserver-key</code></li>
                    <li>Key pair type: RSA</li>
                    <li>Private key format: .pem (for Mac/Linux) or .ppk (for PuTTY/Windows)</li>
                    <li>Click "Create key pair"</li>
                </ul>
                <p><strong>IMPORTANT:</strong> Download and save the key file securely! You can't download it again.</p>
                
                <p><span class="step-number">9</span> <strong>Configure Network Settings</strong></p>
                <p>Click "Edit" in Network settings</p>
                <ul>
                    <li><strong>VPC:</strong> Default VPC (auto-created)</li>
                    <li><strong>Auto-assign public IP:</strong> Enable</li>
                    <li><strong>Firewall (Security Group):</strong> Create new</li>
                    <li><strong>Security group name:</strong> <code>webserver-sg</code></li>
                </ul>
                
                <p><span class="step-number">10</span> <strong>Configure Security Group Rules</strong></p>
                <p>Add these rules:</p>
                
                <p><strong>Rule 1: SSH (for remote access)</strong></p>
                <ul>
                    <li>Type: SSH</li>
                    <li>Protocol: TCP</li>
                    <li>Port: 22</li>
                    <li>Source: My IP (or 0.0.0.0/0 for anywhere - less secure)</li>
                </ul>
                
                <p><strong>Rule 2: HTTP (for web access)</strong></p>
                <ul>
                    <li>Type: HTTP</li>
                    <li>Protocol: TCP</li>
                    <li>Port: 80</li>
                    <li>Source: 0.0.0.0/0 (anywhere)</li>
                </ul>
                
                <p><strong>Rule 3: HTTPS (optional, for secure web)</strong></p>
                <ul>
                    <li>Type: HTTPS</li>
                    <li>Protocol: TCP</li>
                    <li>Port: 443</li>
                    <li>Source: 0.0.0.0/0</li>
                </ul>
                
                <p><span class="step-number">11</span> <strong>Configure Storage</strong></p>
                <ul>
                    <li>Size: 8 GB (default)</li>
                    <li>Type: gp3 (General Purpose SSD)</li>
                    <li>✓ Free tier: Up to 30 GB</li>
                </ul>
                
                <p><span class="step-number">12</span> <strong>Advanced Details (Optional - User Data)</strong></p>
                <p>Expand "Advanced details" → Scroll to "User data"</p>
                <p>Paste this script to auto-install web server:</p>
                <pre><code>#!/bin/bash
# Update system
yum update -y

# Install Apache web server
yum install httpd -y

# Start Apache
systemctl start httpd
systemctl enable httpd

# Create simple webpage
echo "&lt;html&gt;&lt;h1&gt;Hello from AWS EC2!&lt;/h1&gt;&lt;p&gt;Instance: \$(hostname -f)&lt;/p&gt;&lt;/html&gt;" > /var/www/html/index.html

# Set permissions
chmod 644 /var/www/html/index.html</code></pre>
                <p><strong>For Ubuntu, use this instead:</strong></p>
                <pre><code>#!/bin/bash
# Update system
apt-get update -y

# Install Apache
apt-get install apache2 -y

# Start Apache
systemctl start apache2
systemctl enable apache2

# Create webpage
echo "&lt;html&gt;&lt;h1&gt;Hello from AWS EC2!&lt;/h1&gt;&lt;p&gt;Instance: \$(hostname -f)&lt;/p&gt;&lt;/html&gt;" > /var/www/html/index.html</code></pre>
                
                <p><span class="step-number">13</span> <strong>Launch Instance!</strong></p>
                <p>Review summary → Click "Launch instance"</p>
                <p>✓ Instance is launching!</p>
                
                <p><span class="step-number">14</span> <strong>View Instance</strong></p>
                <p>Click "View all instances"</p>
                <p><strong>Status:</strong> Pending → Running (takes 1-2 minutes)</p>
                <p>✓ Instance running!</p>
            </div>
            
            <h3>Part 3: Connecting to EC2 Instance</h3>
            
            <h4>Method 1: EC2 Instance Connect (Browser-Based)</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Select Instance</strong></p>
                <p>Check the box next to your instance</p>
                
                <p><span class="step-number">2</span> <strong>Connect</strong></p>
                <p>Click "Connect" button (top right)</p>
                
                <p><span class="step-number">3</span> <strong>EC2 Instance Connect</strong></p>
                <p>Tab: "EC2 Instance Connect"</p>
                <p>Click "Connect"</p>
                
                <p><span class="step-number">4</span> <strong>Browser Terminal Opens</strong></p>
                <p>✓ Connected via browser!</p>
                <pre><code>[ec2-user@ip-172-31-xx-xx ~]$</code></pre>
            </div>
            
            <h4>Method 2: SSH from Local Terminal</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Get Public IP</strong></p>
                <p>In EC2 Console → Select instance</p>
                <p>Copy "Public IPv4 address" (e.g., 54.123.45.67)</p>
                
                <p><span class="step-number">2</span> <strong>Set Key Permissions (Mac/Linux)</strong></p>
                <pre><code>chmod 400 mywebserver-key.pem</code></pre>
                
                <p><span class="step-number">3</span> <strong>SSH Connect</strong></p>
                <p><strong>For Amazon Linux:</strong></p>
                <pre><code>ssh -i mywebserver-key.pem ec2-user@54.123.45.67</code></pre>
                
                <p><strong>For Ubuntu:</strong></p>
                <pre><code>ssh -i mywebserver-key.pem ubuntu@54.123.45.67</code></pre>
                
                <p><span class="step-number">4</span> <strong>Accept Fingerprint</strong></p>
                <p>Type: <code>yes</code></p>
                
                <p><span class="step-number">5</span> <strong>Connected!</strong></p>
                <pre><code>[ec2-user@ip-172-31-xx-xx ~]$</code></pre>
                <p>✓ SSH connection established!</p>
            </div>
            
            <h4>Method 3: PuTTY (Windows)</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Convert .pem to .ppk</strong></p>
                <p>Use PuTTYgen to convert key file</p>
                
                <p><span class="step-number">2</span> <strong>Open PuTTY</strong></p>
                <ul>
                    <li>Host Name: ec2-user@54.123.45.67</li>
                    <li>Port: 22</li>
                    <li>Connection type: SSH</li>
                </ul>
                
                <p><span class="step-number">3</span> <strong>Load Private Key</strong></p>
                <p>SSH → Auth → Browse → Select .ppk file</p>
                
                <p><span class="step-number">4</span> <strong>Open Connection</strong></p>
                <p>✓ Connected via PuTTY!</p>
            </div>
            
            <h3>Part 4: Deploying Web Application</h3>
            
            <h4>If User Data Script Worked:</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Open Browser</strong></p>
                <p>Navigate to: http://[Your-Public-IP]</p>
                <p>Example: http://54.123.45.67</p>
                
                <p><span class="step-number">2</span> <strong>View Web Page</strong></p>
                <p>✓ "Hello from AWS EC2!" appears!</p>
            </div>
            
            <h4>Manual Installation (if User Data didn't run):</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Connect to Instance</strong></p>
                <p>Use any method above</p>
                
                <p><span class="step-number">2</span> <strong>Update System</strong></p>
                <pre><code># Amazon Linux
sudo yum update -y

# Ubuntu
sudo apt-get update -y</code></pre>
                
                <p><span class="step-number">3</span> <strong>Install Apache Web Server</strong></p>
                <pre><code># Amazon Linux
sudo yum install httpd -y

# Ubuntu
sudo apt-get install apache2 -y</code></pre>
                
                <p><span class="step-number">4</span> <strong>Start Apache</strong></p>
                <pre><code># Amazon Linux
sudo systemctl start httpd
sudo systemctl enable httpd

# Ubuntu
sudo systemctl start apache2
sudo systemctl enable apache2</code></pre>
                
                <p><span class="step-number">5</span> <strong>Check Status</strong></p>
                <pre><code># Amazon Linux
sudo systemctl status httpd

# Ubuntu
sudo systemctl status apache2</code></pre>
                <p>Should show: "active (running)"</p>
                
                <p><span class="step-number">6</span> <strong>Create Custom Web Page</strong></p>
                <pre><code>sudo bash -c 'cat > /var/www/html/index.html << EOF
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My AWS Web App&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 50px;
        }
        h1 { font-size: 3em; }
        .info { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;🚀 Welcome to My AWS EC2 Web App!&lt;/h1&gt;
    &lt;div class="info"&gt;
        &lt;p&gt;Server: \$(hostname)&lt;/p&gt;
        &lt;p&gt;Deployed on AWS EC2&lt;/p&gt;
        &lt;p&gt;Instance Type: t2.micro&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
EOF'</code></pre>
                
                <p><span class="step-number">7</span> <strong>Test in Browser</strong></p>
                <p>http://[Your-Public-IP]</p>
                <p>✓ Beautiful custom page appears!</p>
            </div>
            
            <h3>Part 5: Allocating Elastic IP (Static IP)</h3>
            
            <p><strong>Problem:</strong> Public IP changes when instance stops/starts</p>
            <p><strong>Solution:</strong> Elastic IP provides static IP address</p>
            
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Navigate to Elastic IPs</strong></p>
                <p>EC2 Dashboard → Network & Security → Elastic IPs</p>
                
                <p><span class="step-number">2</span> <strong>Allocate Elastic IP</strong></p>
                <p>Click "Allocate Elastic IP address"</p>
                <ul>
                    <li>Network Border Group: Default</li>
                    <li>Click "Allocate"</li>
                </ul>
                <p>✓ Elastic IP allocated!</p>
                
                <p><span class="step-number">3</span> <strong>Associate Elastic IP</strong></p>
                <p>Select the new Elastic IP</p>
                <p>Actions → Associate Elastic IP address</p>
                <ul>
                    <li>Instance: Select your instance (MyWebServer)</li>
                    <li>Private IP: (auto-filled)</li>
                    <li>Click "Associate"</li>
                </ul>
                <p>✓ Static IP associated!</p>
                
                <p><span class="step-number">4</span> <strong>Test New IP</strong></p>
                <p>Navigate to new Elastic IP in browser</p>
                <p>✓ Website accessible via static IP!</p>
                
                <p><strong>Note:</strong> This IP persists even if you stop/start instance</p>
            </div>
            
            <h3>Part 6: Deploying Node.js/Python Application</h3>
            
            <h4>Deploy Node.js App:</h4>
            <div class="steps">
                <p><span class="step-number">1</span> <strong>Install Node.js</strong></p>
                <pre><code># Amazon Linux
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs -y

# Ubuntu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install nodejs -y</code></pre>
                
                <p><span class="step-number">2</span> <strong>Verify Installation</strong></p>
                <pre><code>node --version
npm --version</code></pre>
                
                <p><span class="step-number">3</span> <strong>Create App Directory</strong></p>
                <pre><code>mkdir ~/myapp
cd ~/myapp</code></pre>
                
                <p><span class="step-number">4</span> <strong>Create app.js</strong></p>
                <pre><code>cat > app.js << 'EOF'
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('&lt;h1&gt;Hello from Node.js on AWS EC2!&lt;/h1&gt;');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
EOF</code></pre>
                
                <p><span class="step-number">5</span> <strong>Run Application</strong></p>
                <pre><code>node app.js &</code></pre>
                
                <p><span class="step-number">6</span> <strong>Update Security Group</strong></p>
                <p>Add inbound rule for port 3000</p>
                
                <p><span class="step-number">7</span> <strong>Access App</strong></p>
                <p>http://[Your-IP]:3000</p>
                <p>✓ Node.js app running!</p>
            </div>
            
            <h3>Essential EC2 Commands</h3>
            
            <h4>Instance Management:</h4>
            <pre><code># Check instance status
systemctl status httpd  # or apache2

# Restart web server
sudo systemctl restart httpd

# View running processes
ps aux | grep httpd

# Check open ports
sudo netstat -tulpn

# View logs
sudo tail -f /var/log/httpd/access_log  # Apache access
sudo tail -f /var/log/httpd/error_log   # Apache errors

# Check disk usage
df -h

# Check memory
free -h

# Check CPU info
lscpu

# View network config
ifconfig
ip addr show</code></pre>
            
            <h3>Managing Your Instance from AWS Console</h3>
            
            <h4>Stop Instance (saves money):</h4>
            <p>Select instance → Instance state → Stop instance</p>
            <p><strong>Note:</strong> Public IP changes unless you have Elastic IP!</p>
            
            <h4>Start Instance:</h4>
            <p>Select instance → Instance state → Start instance</p>
            
            <h4>Reboot Instance:</h4>
            <p>Select instance → Instance state → Reboot instance</p>
            
            <h4>Terminate Instance (DELETE - careful!):</h4>
            <p>Select instance → Instance state → Terminate instance</p>
            <p><strong>WARNING:</strong> This permanently deletes the instance!</p>
            
            <h3>Scenario-Based Questions</h3>
            
            <h4>Q1: Can't access website - Connection refused</h4>
            <p><strong>Troubleshooting:</strong></p>
            <ul>
                <li>✓ Check security group has HTTP (port 80) open</li>
                <li>✓ Verify Apache is running: <code>sudo systemctl status httpd</code></li>
                <li>✓ Check firewall: <code>sudo iptables -L</code></li>
                <li>✓ Verify correct public IP address</li>
            </ul>
            
            <h4>Q2: Can't SSH - Permission denied</h4>
            <p><strong>Solutions:</strong></p>
            <pre><code># Fix key permissions
chmod 400 mykey.pem

# Use correct username:
# Amazon Linux → ec2-user
# Ubuntu → ubuntu
# RHEL → ec2-user or root

# Verify security group allows SSH (port 22) from your IP</code></pre>
            
            <h4>Q3: Website stops working after instance restart</h4>
            <p><strong>Reasons:</strong></p>
            <ul>
                <li>Public IP changed (solution: use Elastic IP)</li>
                <li>Web server didn't auto-start (solution: <code>sudo systemctl enable httpd</code>)</li>
            </ul>
            
            <h4>Q4: High AWS bills - how to reduce costs?</h4>
            <p><strong>Tips:</strong></p>
            <ul>
                <li>✓ Stop instances when not in use</li>
                <li>✓ Use t2.micro (free tier eligible)</li>
                <li>✓ Delete unused Elastic IPs (charged if not associated)</li>
                <li>✓ Delete unused volumes/snapshots</li>
                <li>✓ Set up billing alerts</li>
            </ul>
            
            <h3>Free Tier Limits</h3>
            <ul>
                <li><strong>EC2:</strong> 750 hours/month of t2.micro (Linux or Windows)</li>
                <li><strong>Storage:</strong> 30 GB of EBS storage</li>
                <li><strong>Data Transfer:</strong> 15 GB out per month</li>
                <li><strong>Elastic IP:</strong> Free if associated with running instance</li>
            </ul>
            
            <h3>Best Practices</h3>
            <ul>
                <li>✓ Always use key pairs (never password SSH)</li>
                <li>✓ Restrict SSH to your IP only</li>
                <li>✓ Keep system updated: <code>sudo yum update</code></li>
                <li>✓ Use Elastic IP for production websites</li>
                <li>✓ Enable HTTPS for secure communication</li>
                <li>✓ Regular backups with AMI snapshots</li>
                <li>✓ Monitor billing to avoid surprises</li>
                <li>✓ Tag instances for organization</li>
                <li>✓ Use IAM roles instead of access keys</li>
                <li>✓ Stop instances when not needed</li>
            </ul>
            
            <h3>Cleanup (To Avoid Charges)</h3>
            <pre><code>1. Terminate EC2 instance
2. Release Elastic IP (if allocated)
3. Delete security groups (if custom created)
4. Delete key pairs (if no longer needed)
5. Delete volumes/snapshots</code></pre>
        `
    }
];

// Display experiments on page load
window.onload = function() {
    displayExperiments(experiments);
};

// Display experiment cards
function displayExperiments(experimentsToDisplay) {
    const grid = document.getElementById('experimentsGrid');
    grid.innerHTML = '';
    
    experimentsToDisplay.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experiment-card';
        card.onclick = () => openModal(exp);
        
        const tagsHTML = exp.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        
        card.innerHTML = `
            <span class="experiment-number">Experiment ${exp.id}</span>
            <h3>${exp.title}</h3>
            <p class="description">${exp.description}</p>
            <div class="tags">${tagsHTML}</div>
        `;
        
        grid.appendChild(card);
    });
}

// Search functionality
function searchExperiments() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = experiments.filter(exp => 
        exp.title.toLowerCase().includes(searchTerm) ||
        exp.description.toLowerCase().includes(searchTerm) ||
        exp.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    displayExperiments(filtered);
}

// Modal functions
function openModal(experiment) {
    const modal = document.getElementById('experimentModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = experiment.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('experimentModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('experimentModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.onkeydown = function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
};
