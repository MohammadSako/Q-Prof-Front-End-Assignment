import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function DatePickers() {
  return (
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
      </DemoContainer>
  );
}
