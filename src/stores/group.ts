import { ref } from "vue";
import { defineStore } from "pinia";

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
        },
      ];
    }

    return { groups, onAddGroup };
  },
  {
    persist: true,
  },
);

interface Group {
  id: number;
  name: string;
  total: number | 0;
}
