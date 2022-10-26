import { useIntl } from "react-intl";

type AlertProps = {
  messageId: string;
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
};

export const Alert: React.FC<AlertProps> = ({
  messageId,
  variant,
}: AlertProps) => {
  const { formatMessage } = useIntl();

  if (!messageId) {
    throw new Error("The messageId prop is required");
  }

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {formatMessage({ id: messageId })}
    </div>
  );
};
