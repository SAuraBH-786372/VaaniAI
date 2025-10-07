import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null during SSR to prevent hydration issues
  if (!mounted) {
    return null;
  }

  // Determine which icon to display based on current theme
  const getCurrentIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-5 w-5 transition-transform duration-300 ease-in-out" />;
    }
    
    // Use resolvedTheme for actual theme when system is selected
    const activeTheme = theme === 'system' ? resolvedTheme : theme;
    
    if (activeTheme === 'dark') {
      return <Moon className="h-5 w-5 transition-transform duration-300 ease-in-out rotate-0" />;
    }
    
    return <Sun className="h-5 w-5 transition-transform duration-300 ease-in-out rotate-0" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
          aria-label="Toggle theme"
          aria-expanded="false"
        >
          {getCurrentIcon()}
          <span className="sr-only">
            Current theme: {theme === 'system' ? `System (${resolvedTheme})` : theme}
          </span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="min-w-[140px]"
        sideOffset={8}
      >
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={`cursor-pointer gap-2 ${
            theme === 'light' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
              : ''
          }`}
          aria-label="Switch to light theme"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === 'light' && (
            <span className="ml-auto text-xs" aria-hidden="true">✓</span>
          )}
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={`cursor-pointer gap-2 ${
            theme === 'dark' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
              : ''
          }`}
          aria-label="Switch to dark theme"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === 'dark' && (
            <span className="ml-auto text-xs" aria-hidden="true">✓</span>
          )}
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={`cursor-pointer gap-2 ${
            theme === 'system' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
              : ''
          }`}
          aria-label="Use system theme preference"
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
          {theme === 'system' && (
            <span className="ml-auto text-xs" aria-hidden="true">✓</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}