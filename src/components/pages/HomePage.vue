<script setup lang="ts">
import type { Members } from "@/types";
import { uniqueId } from "lodash";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-vue-next";
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
const isOpen = ref<boolean>(false);
const groupName = ref<string>("");
const memberName = ref<string>("");
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
  memberName.value = "";
  groupName.value = "";
};
</script>

<template>
  <div class="h-[500px] w-full shadow-lg rounded-md relative">
    <div class="absolute bottom-4 right-4">
      <Button @click="isOpen = !isOpen">Create Group</Button>
    </div>
    <div class="text-center text-xl">Your'e Groups</div>
    <hr class="mt-2" />
    <div class="flex flex-col">
      <div class="flex px-2 flex-col w-full" v-for="(group,index) in groups" :key="`group-${index}`">
        <div class="p-2 my-2 shadow-lg rounded-md">
          <div class="flex items-center justify-between">
            <span class="truncate"> {{ group.name }}</span>
            <ChevronRight class="cursor-pointer mr-2" />
          </div>
        </div>
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
          <ul class="block" v-for="(member,index) in members" :key="`member-${index}`">
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
