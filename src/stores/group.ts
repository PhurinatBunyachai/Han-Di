import { ref } from "vue";
import { defineStore } from "pinia";
import type { Group, Members } from "@/types";

export const useGroupStore = defineStore(
  "group",
  () => {
    const groups = ref<Group[]>([]);

    function onAddGroup(): void {
      groups.value = [
        ...groups.value,
        {
          id: 1,
          name: "test",
          total: 100,
          members: []<Members[]>,
        },
      ];
    }

    return { groups, onAddGroup };
  },
  {
    persist: true,
  },
);
