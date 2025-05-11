import { forwardRef, useMemo, type Ref, Fragment } from "react";
import type { ActionImpl, ActionId } from "kbar";
import { ListTodo } from "lucide-react";

// Icons matching those in the image
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

const GuestbookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const LinksIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const AboutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const ResumeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ResultItem = forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const ancestors = useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    const getActionIcon = () => {
      if (!action.icon) {
        switch (action.id) {
          case "home":
            return <HomeIcon />;
          case "projects":
            return <ProjectsIcon />;
          case "blog":
            return <BlogIcon />;
          case "guestbook":
            return <GuestbookIcon />;
          case "links":
            return <LinksIcon />;
            case "bucket-list":
              return <ListTodo/>
          case "about":
            return <AboutIcon />;
          case "resume":
            return <ResumeIcon />;
          case "viewGithub":
            return <GithubIcon />;
          case "viewLinkedIn":
            return <LinkedInIcon />;
          default:
            return null;
        }
      }
      return action.icon;
    };

    ResultItem.displayName = "ResultItem";
    
    return (
      <div
        ref={ref}
        className={`px-3 py-2 flex items-center cursor-pointer relative rounded-lg transition-colors duration-200 ${
          active 
            ? 'bg-blue-600/80' 
            : 'bg-transparent hover:bg-gray-800/50'
        }`}
      >
        {/* Icon Container with rounded box */}
        <div className={`flex items-center justify-center w-10 h-10 mr-3 rounded-md ${
          active 
            ? 'bg-green-500/60 text-white' 
            : 'bg-gray-800/70 text-gray-400'
        }`}>
          {getActionIcon()}
        </div>
        
        <div className="flex flex-col flex-1">
          {/* Command Name */}
          <div className={`text-sm font-medium ${active ? "text-white" : "text-gray-300"}`}>
            {ancestors.length > 0 &&
              ancestors.map((ancestor) => (
                <Fragment key={`${action.id}-ancestor-${ancestor.id}`}>
                  <span className="opacity-50 mr-2">{ancestor.name}</span>
                  <span className="mr-2">&rsaquo;</span>
                </Fragment>
              ))}
            <span>{action.name}</span>
          </div>
          
          {/* Subtitle text */}
          {action.subtitle && (
            <div className={`text-xs mt-0.5 ${active ? "text-blue-100/80" : "text-gray-400"}`}>
              {action.subtitle}
            </div>
          )}
        </div>
        
        {/* Keyboard Shortcuts */}
        {action.shortcut?.length ? (
          <div className="grid grid-flow-col gap-1">
            {action.shortcut.map((sc, index) => (
              <kbd
                key={`${action.id}-shortcut-${index}`}
                className={`px-1.5 py-0.5 rounded text-xs ${
                  active 
                    ? 'bg-green-500/50 text-white' 
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

export default ResultItem;