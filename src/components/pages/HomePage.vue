<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
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
const isOpen = true;
</script>

<template>
  <div class="h-[500px] w-full shadow-lg rounded-md">
    <Button @click="groupStore.onAddGroup()">+</Button>
    <div class="flex flex-col">
      <div class="flex flex-col w-full" v-for="group in groups">
        {{ group.name }}
      </div>
    </div>
    <Drawer :open="isOpen">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline"> Cancel </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
</template>
