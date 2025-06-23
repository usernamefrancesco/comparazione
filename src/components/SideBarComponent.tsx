import React from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { Calculator, Info, HelpCircle, Mail, Phone } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
});

const items = [
  {
    title: 'Calcola Rata',
    url: '/calcola-rata',
    icon: Calculator
  },
  {
    title: 'Calcola Importo',
    url: '/calcola-mutuo',
    icon: Calculator
  }
]

const footerItems = [
  {
    title: 'Aiuto',
    url: '/aiuto',
    icon: HelpCircle
  },
  {
    title: 'Contatti',
    url: '/contatti',
    icon: Mail
  },
  {
    title: 'Info',
    url: '/info',
    icon: Info
  }
]

export default function SideBarComponent() {
  return (
    <Sidebar>
      
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="text-2xl font-semibold text-black pt-3">
              Menu Principale
            </SidebarGroupLabel>
            <SidebarMenu className="pt-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="">
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="sm">
                    <Link href={item.url} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <div className="mt-4 pt-4 border-t text-xs text-gray-500">
              <p>© 2025 Calcola Mutuo</p>
              <p>Versione 1.0.0</p>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}