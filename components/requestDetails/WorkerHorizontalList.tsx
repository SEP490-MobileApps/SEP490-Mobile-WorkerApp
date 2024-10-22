import { WORKERS } from "@/dummies/DummyWorkers";
import React from "react";
import { FlatList } from "react-native";
import WorkerCard from "./WorkerCard";

export default function WorkerHorizontalList() {
  return (
    <FlatList
      horizontal
      data={WORKERS}
      renderItem={(flatListItem) => <WorkerCard worker={flatListItem.item} />}
      keyExtractor={(worker) => worker.id}
      showsHorizontalScrollIndicator={false}
    />
  );
}
