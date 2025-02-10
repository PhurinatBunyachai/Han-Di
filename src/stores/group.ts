import { ref } from "vue";
import { defineStore } from "pinia";
import type { Group, Members } from "@/types";

export const useGroupStore = defineStore(
  "group",
  () => {
    const groups = ref<Group[]>([]);

    function onAddGroup({ newGroup }): void {
      groups.value = [...groups.value, newGroup];
    }

    return { groups, onAddGroup };
  },
  {
    persist: true,
  },
);
