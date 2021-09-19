import { VFC, useContext } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import { CounterContext, counterSlice } from 'features/couters';

const BULK_UNIT = 10;

const CounterBoard: VFC = () => {
  const {
    state: { count },
    dispatch,
  } = useContext(CounterContext);

  const { added, decremented, incremented } = counterSlice.actions;

  return (
    <Card className="centered">
      <Statistic>
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={() => dispatch(decremented)}>
            -1
          </Button>
          <Button color="green" onClick={() => dispatch(incremented)}>
            1
          </Button>
        </div>
        <div className="fluid-button">
          <Button fluid color="grey" onClick={() => dispatch(added(BULK_UNIT))}>
            +{BULK_UNIT}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CounterBoard;
