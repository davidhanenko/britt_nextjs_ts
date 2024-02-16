This is a simple Next.js application with JSON-server mock API.

## Built with

- Next.js(13.5.6)
- TypeScript
- TailwindCSS
- Json-server

## Getting Started

1. Clone the repository.

    ```git clone https://github.com/davidhanenko/_________.git```

2. Navigate to the project directory.
3. Install dependencies.


    ```npm install```
  
4.  Start the development Next.js server concurrently with json-server.


    ```npm run dev-server```

5. Open your browser and navigate to http://localhost:3000 to view the application.

   
## Functionality Description:

#### Dynamic Routing

- **Route**: `/[userId]/page.tsx`
- **Functionality**: Fetches and displays user profile details based on the ID of the selected user.
- **Implementation**: Utilizes Next.js's file system-based routing by creating a page under `app/[userId]/page.tsx`. The Page component receives the user ID through route `params` and then passes it to the API fetching function as part of the URL.

#### Server Action
- **Location**: `[/app/actions.ts]`
- **Functionality**:  Simulates a "like" action for a user profile by incrementing a like counter.
- **Implementation**: Defined within the Next.js `"use server"` directive, saved in a separate file, and invoked from the client-side component event handler `onClick`. It accepts two arguments: `id` and `likes`, increments the like count based on the current amount of likes, and triggers route revalidating for an instant update. Two actions with identical functionality but different revalidation paths are presented.



