import assert from "assert";
import { 
  TestHelpers,
  Access_RoleGranted
} from "generated";
const { MockDb, Access } = TestHelpers;

describe("Access contract RoleGranted event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Access contract RoleGranted event
  const event = Access.RoleGranted.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Access_RoleGranted is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Access.RoleGranted.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAccessRoleGranted = mockDbUpdated.entities.Access_RoleGranted.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAccessRoleGranted: Access_RoleGranted = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      account: event.params.account,
      role: event.params.role,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAccessRoleGranted, expectedAccessRoleGranted, "Actual AccessRoleGranted should be the same as the expectedAccessRoleGranted");
  });
});
