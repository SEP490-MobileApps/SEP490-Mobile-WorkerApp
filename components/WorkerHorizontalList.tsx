import { WORKERS } from "@/dummies/DummyWorkers";
import React from "react";
import { FlatList } from "react-native";
import WorkerCard from "./WorkerCard";

export default function WorkerHorizontalList() {
  return (
    <FlatList
      horizontal
      //   contentContainerStyle={{ gap: GAP_BETWEEN_ROWS }}
      //   columnWrapperStyle={{ gap: GAP_BETWEEN_COLUMNS }}

      data={WORKERS}
      renderItem={(flatListItem) => <WorkerCard worker={flatListItem.item} />}
      keyExtractor={(worker) => worker.id}
      showsHorizontalScrollIndicator={false}
    />
  );
}
