/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Access,
  Access_RoleGranted,
  Access_RoleRevoked,
} from "generated";


Access.RoleGranted.handler(async ({ event, context }) => {
  const entity: Access_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    role: event.params.role,
  };

  context.Access_RoleGranted.set(entity);
});

Access.RoleRevoked.handler(async ({ event, context }) => {
  const entity: Access_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
    role: event.params.role,
  };

  context.Access_RoleRevoked.set(entity);
});
