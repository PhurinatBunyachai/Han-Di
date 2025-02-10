<script setup lang="ts">
import type { Members } from "@/types";
import { uniqueId } from "lodash";
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
const isOpen: boolean = ref(false);
const groupName: string = ref("");
const memberName: string = ref("");
const members = ref<Members[]>([]);
const onAddMember = () => {
  members.value = [
    ...members.value,
    {
      id: uniqueId(),
      name: memberName.value,
    },
  ];
  memberName.value = "";
};
const onAddGroup = () => {
  const newGroup = {
    id: uniqueId(),
    name: groupName,
    members: members.value,
  };
  groupStore.onAddGroup({ newGroup });
  isOpen.value = false;
};
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
            <Input v-model="memberName" placeholder="Member Name" />
            <Button type="submit" @click="onAddMember" :disabled="!memberName">
              Add
            </Button>
          </div>
          <ul class="block" v-for="member in members">
            <li>
              {{ member.name }}
            </li>
          </ul>
        </div>
        <DrawerFooter>
          <Button :disabled="!groupName" @click="onAddGroup"> Submit </Button>
          <Button @click="isOpen = !isOpen" variant="outline"> Cancel </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
</template>
