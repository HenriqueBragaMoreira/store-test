import StyledComponentsRegistry from "../../lib/styled-components/registry";
import { GlobalStyles } from "../../styles/global";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../lib/react-query/react-query";
import { Montserrat } from "next/font/google";
import { Toaster } from 'sonner';
import "@mantine/core/styles.css";

const montserrat = Montserrat({ subsets: ["latin"] });

interface ChildrenProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: ChildrenProps) => {
  return (
    <div className={montserrat.className}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <StyledComponentsRegistry>
          <Toaster position="bottom-left" richColors/>
            {children}
            <GlobalStyles />
          </StyledComponentsRegistry>
        </MantineProvider>
      </QueryClientProvider>
    </div>
  );
};
