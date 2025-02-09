import { useIntl } from "react-intl";

import { ImageBlock } from "components";

import styles from "./DiffIconBlock.module.scss";

interface DiffIconBlockProps {
  newCount: number;
  removedCount: number;
  changedCount: number;
}
export const DiffIconBlock: React.FC<DiffIconBlockProps> = ({ newCount, removedCount, changedCount }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.iconBlock}>
      {removedCount > 0 && (
        <ImageBlock
          num={removedCount}
          color="red"
          light
          ariaLabel={`${removedCount} ${formatMessage(
            {
              id: "connection.updateSchema.removed",
            },
            {
              value: removedCount,
              item: formatMessage({ id: "field" }, { values: { count: removedCount } }),
            }
          )}`}
        />
      )}
      {newCount > 0 && (
        <ImageBlock
          num={newCount}
          color="green"
          light
          ariaLabel={`${newCount} ${formatMessage(
            {
              id: "connection.updateSchema.new",
            },
            {
              value: newCount,
              item: formatMessage({ id: "field" }, { values: { count: newCount } }),
            }
          )}`}
        />
      )}
      {changedCount > 0 && (
        <ImageBlock
          num={changedCount}
          color="blue"
          light
          ariaLabel={`${changedCount} ${formatMessage(
            {
              id: "connection.updateSchema.changed",
            },
            {
              value: changedCount,
              item: formatMessage({ id: "field" }, { values: { count: changedCount } }),
            }
          )}`}
        />
      )}
    </div>
  );
};
