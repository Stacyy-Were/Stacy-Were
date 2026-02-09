import json

def add_project(title, desc, tech, score, link):
    file_path = '../projects.json'
    
    # Load existing data
    with open(file_path, 'r') as f:
        projects = json.load(f)
    
    # Add new project
    new_entry = {
        "id": len(projects) + 1,
        "title": title,
        "description": desc,
        "tech_stack": tech,
        "performance_score": score,
        "github_link": link
    }
    
    projects.append(new_entry)
    
    # Save back to file
    with open(file_path, 'w') as f:
        json.dump(projects, f, indent=2)
    
    print(f"🏎️ '{title}' added to projects.json!")

if __name__ == "__main__":
    add_project("New Race Project", "Built without Supabase.", ["JS", "Python"], 95, "#")