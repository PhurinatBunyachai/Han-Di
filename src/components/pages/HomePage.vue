<script setup lang="ts">
import type { Members } from "@/types";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useGroupStore } from "@/stores/group";
import { storeToRefs } from "pinia";
const groupStore = useGroupStore();
const { groups } = storeToRefs(groupStore);
const isOpen = ref(false);
const groupName = ref("");
const members = ref<Members[]>([]);
</script>

<template>
  <div class="h-[500px] w-full shadow-lg rounded-md">
    <Button @click="isOpen = !isOpen">+</Button>
    <div class="flex flex-col">
      <div class="flex flex-col w-full" v-for="group in groups">
        {{ group.name }}
      </div>
    </div>
    <Drawer :open="isOpen">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create you're group</DrawerTitle>
          <DrawerDescription>Create Create Create</DrawerDescription>
        </DrawerHeader>
        <div class="flex flex-col w-full px-4">
          <Input v-model="groupName" class="mb-1" placeholder="Group Name" />
          <div class="flex w-full max-w-sm items-center gap-1.5">
            <Input placeholder="Member Name" />
            <Button type="submit"> Add </Button>
            <ul v-for="member in members">
              <li>{{ member.name }}</li>
            </ul>
          </div>
        </div>
        <DrawerFooter>
          <Button :disabled="!groupName">Submit</Button>
          <Button @click="isOpen = !isOpen" variant="outline"> Cancel </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
</template>
