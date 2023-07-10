import { FC } from "react";
import { UserTask } from "@vanillabp/bc-official-gui-client";
import { ListItemStatus } from "./index.js";

interface Title {
  [key: string]: string;
}

interface Column {
  title: Title;
  path: string;
  priority: number;
  width: string;
};

interface ListItem {
  id: string;
  number: number;
  data: UserTask;
  status: ListItemStatus;
  selected: boolean;
};

export interface DefaultUserTaskListCellProps {
  item: ListItem;
  column: Column;
}

interface UserTaskListCellProps extends DefaultUserTaskListCellProps {
  defaultCell: FC<DefaultUserTaskListCellProps>;
}

export type UserTaskListCell = FC<UserTaskListCellProps>;
