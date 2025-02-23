<script setup lang="ts">
import { ref } from "vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const isAvatarMenuOpen = ref<boolean>(false);
</script>
<template>
  <div class="w-full flex items-center justify-between px-4 py-2 shadow-sm">
    <!-- Left side logo -->
    <div class="flex items-center w-[200px]">
      <img src="https://placehold.co/200x80?text=Logo" alt="Logo" class="h-8 w-auto" />
    </div>

    <!-- Center app name -->
    <div class="flex-1 text-center">
      <span class="text-xl font-semibold">HanDi</span>
    </div>

    <!-- Right side avatar menu -->
    <div class="w-[200px] flex justify-end">
      <DropdownMenu v-model:open="isAvatarMenuOpen">
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="@/assets/avatar-placeholder.png" alt="User avatar" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Your Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>
