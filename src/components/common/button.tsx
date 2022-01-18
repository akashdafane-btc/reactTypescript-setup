import { Button, Spinner } from 'react-bootstrap';
import { ButtonProps } from '../../interfaces/types';

const CustomeButton: React.FC<ButtonProps> = ({
  handleClick,
  label,
  isLoading,
  variant,
  prependIcon,
  iconClass,
}) => {
  return (
    <Button onClick={() => handleClick()} variant={variant || 'primary'}>
      {isLoading ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {prependIcon && (
            <i className={iconClass} data-testid={'prePendIcon'} />
          )}
          {label}
          {!prependIcon && (
            <i className={iconClass} data-testid={'postPendIcon'} />
          )}
        </>
      )}
    </Button>
  );
};

export default CustomeButton;
