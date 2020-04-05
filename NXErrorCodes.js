//All info taken from here https://switchbrew.org/wiki/Error_codes

let errorInfo = class {
    moduleName = '';
    descriptions = {};
    constructor(name) {this.moduleName = name};
};

var kernelInfo = new errorInfo('Kernel');
var FSInfo = new errorInfo('FS');
var OSInfo = new errorInfo('OS (Memory, Thread, Mutex, NVIDIA)');
var HtcsInfo = new errorInfo('Htcfs');
var NCMInfo = new errorInfo('NCM');
var DDInfo = new errorInfo('DD');
var debugMonitorInfo = new errorInfo('Debug Monitor');
var LRInfo = new errorInfo('LR');
var loaderInfo = new errorInfo('Loader');
var CMIFInfo = new errorInfo('CMIF (IPC command interface)');
var HIPCInfo = new errorInfo('HIPC (IPC)');
var PMInfo = new errorInfo('PM');
var NSInfo = new errorInfo('NS');
var BsdsocketsInfo = new errorInfo('Bsdsockets');
var HtcInfo = new errorInfo('Htc');
var TSCInfo = new errorInfo('TSC');
var NCMInfo = new errorInfo('NCM (content)');
var SMInfo = new errorInfo('SM');
var ROInfo = new errorInfo('RO (userland)');
var GCInfo = new errorInfo('GC');
var SDMMCInfo = new errorInfo('SDMMC');
var OVLNInfo = new errorInfo('OVLN');
var SPLInfo = new errorInfo('SPL');
var socketInfo = new errorInfo('Socket');
var HtclowInfo = new errorInfo('Htclow')
var busInfo = new errorInfo('Bus');
var HtcfsInfo = new errorInfo('Htcfs');
var AsyncInfo = new errorInfo('Async');
var ETHCInfo = new errorInfo('ETHC');
var I2CInfo = new errorInfo('I2C');
var GPIOInfo = new errorInfo('GPIO');
var UARTInfo = new errorInfo('UART');
var settingsInfo = new errorInfo('Settings');
var WLANInfo = new errorInfo('WLAN');
var XCDInfo = new errorInfo('XCD');
var NIFMInfo = new errorInfo('NIFM');
var HwopusInfo = new errorInfo('Hwopus');
var SasbusInfo = new errorInfo('Sasbus'); // There are two sasbus variables
var BluetoothInfo = new errorInfo('Bluetooth');
var VIInfo = new errorInfo('VI');
var NFPInfo = new errorInfo('NFP');
var timeInfo = new errorInfo('Time');
var FGMInfo = new errorInfo('FGM');
var OEInfo = new errorInfo('OE');
var PCIeInfo = new errorInfo('PCIe');
var friendsInfo = new errorInfo('Friends');
var BCATInfo = new errorInfo('BCAT');
var SSLInfo = new errorInfo('SSL');
var accountInfo = new errorInfo('Account');
var newsInfo = new errorInfo('News');
var miiInfo = new errorInfo('Mii');
var NFCInfo = new errorInfo('NFC');
var AMInfo = new errorInfo('AM');
var playReportInfo = new errorInfo('Play Report');
var AHIDInfo = new errorInfo('AHID');
var homeMenuInfo = new errorInfo('Home Menu (Qlaunch)');
var PCVInfo = new errorInfo('PCV');
var OMMInfo = new errorInfo('OMM');
var BPCInfo = new errorInfo('BPC');
var PSMInfo = new errorInfo('PSM');
var NIMInfo = new errorInfo('NIM');
var PSCInfo = new errorInfo('PSC');
var TCInfo = new errorInfo('TC');
var USBInfo = new errorInfo('USB');
var NSDInfo = new errorInfo('NSD');
var PCTLInfo = new errorInfo('PCTL');
var BTMInfo = new errorInfo('BTM');
var LAInfo = new errorInfo('LA (Library Applet)');
var ETicketInfo = new errorInfo('ETicket');
var NGCInfo = new errorInfo('NGC (Bad Words)');
var errorReportInfo = new errorInfo('Error Report');
var APMInfo = new errorInfo('APM');
var CECInfo = new errorInfo('CEC');
var profilerInfo = new errorInfo('Profiler');
var errorUploadInfo = new errorInfo('Error Upload');
var audioInfo = new errorInfo('Audio');
var NPNSInfo = new errorInfo('NPNS');
var NPNSXMPPStreamInfo = new errorInfo('NPNS XMPP Stream');
var ARPInfo = new errorInfo('ARP');
var updaterInfo = new errorInfo('Updater');
var SWKBDInfo = new errorInfo('SWKBD');
var mifareInfo = new errorInfo('Mifare');
var userlandAInfo = new errorInfo('Userland (assert)');
var fatalInfo = new errorInfo('Fatal');
var ECInfo = new errorInfo('EC (Shop)');
var SPSMInfo = new errorInfo('SPSM');
var BGTCInfo = new errorInfo('BGTC');
var userlandCInfo = new errorInfo('Userland (crash)'); //This is a seperate Userland error. userlandA is 162 and userlandC is 168
var SasbusPeriodicReceiveModeInfo = new errorInfo('Sasbus Periodic Receive Mode');
var PDMInfo = new errorInfo('PDM');
var OLSCInfo = new errorInfo('OLSC');
var SREPOInfo = new errorInfo('SREPO');
var DauthInfo = new errorInfo('Dauth');
var PWMInfo = new errorInfo('PWM');
var RTCInfo = new errorInfo('RTC');
var regulatorInfo = new errorInfo('Regulator');
var LEDInfo = new errorInfo('Led');
var clkrstInfo = new errorInfo('Clkrst');
var HIDInfo = new errorInfo('HID');
var LDNInfo = new errorInfo('LDN');
var lrsensorInfo = new errorInfo('lrsensor');
var captureInfo = new errorInfo('Capture');
var manuInfo = new errorInfo('Manu');
var ATKInfo = new errorInfo('ATK');
var webInfo = new errorInfo('Web');
var LCSInfo = new errorInfo('LCS (Local Content Sharing)');
var GRCInfo = new errorInfo('GRC');
var albumInfo = new errorInfo('GRC');
var migrationInfo = new errorInfo('Migration');
var migrationIdcServerInfo = new errorInfo('Migration Idc Server');
var hidbusInfo = new errorInfo('Hidbus');
var websocketInfo = new errorInfo('Websocket');
var notificationInfo = new errorInfo('Notification');
var insInfo = new errorInfo('Ins');
var lp2pInfo = new errorInfo('Lp2p');

kernelInfo.descriptions = {
    7 : 'Session count exceeded ',
    14 : 'Invalid kernel capability descriptor',
    33 : 'Not Implemented',
    59 : 'Thread terminated/termination requested',
    70 : 'No more debug events',
    101 : 'Invalid size',
    102 : 'Invalid address',
    103 : 'Resource exhaustion',
    104 : 'Memory exhaustion',
    105 : 'Handle-table exhaustion',
    106 : 'Invalid memory state / invalid memory permissions.',
    108 : 'Invalid memory permissions.',
    110 : 'Invalid memory range',
    112 : 'Invalid thread priority.',
    113 : 'Invalid processor id.',
    114 : 'Invalid handle.',
    115 : 'Invalid pointer/Syscall copy from user failed.',
    116 : 'Invalid combination',
    117 : 'Time out. Also when you give 0 handles to svcWaitSynchronizationN.',
    118 : 'Operation canceled',
    119 : 'Out of range',
    120 : 'Invalid enum',
    121 : 'No such entry',
    122 : 'Irq/DeviceAddressSpace/{...} already registered',
    123 : 'Port remote dead',
    124 : '[Usermode] Unhandled interrupt/exception',
    125 : 'Invalid state',
    126 : 'Reserved value',
    127 : 'Invalid hardware breakpoint',
    128 : '[Usermode] Fatal exception',
    129 : 'Last thread didn\'t belong to your process',
    131 : 'Port closed',
    132 : 'Resource limit exceeded',
    260 : 'Command buffer too small',
    517 : 'Invalid process ID.',
    518 : 'Invalid thread ID.',
    519 : 'Invalid thread ID (used in svcGetDebugThreadParam).',
    520 : 'Process not being debugged'
};

FSInfo.descriptions = {
    1 : 'Path does not exist.',
    2 : 'Path already exists.',
    7 : 'Resource already in use (file already opened, savedata filesystem already mounted).',
    35 : 'Not enough free space for BIS Calibration partition.',
    36 : 'Not enough free space for BIS Safe partition.',
    37 : 'Not enough free space for BIS User partition.',
    38 : 'Not enough free space for BIS System partition.',
    39 : 'Not enough free space on SD card.',
    50 : 'NCA is older than version 3, or NCA SDK version is older than 0.11.0.0',
    60 : 'Specified mount name already exists.',
    1001 : 'Process does not have RomFs',
    1002 : 'Title-id not found / savedata not found.',
    2001 : 'SD card not inserted',
    2520 : 'Gamecard not inserted',
    2522 : 'Attempted process an AsicHandler command in initial mode',
    2540 : 'Attempted to read from the secure gamecard partition in normal mode',
    2541 : 'Attempted to read from the normal gamecard partition in secure mode',
    2542 : 'Attempted a read that spanned both the normal and secure gamecard partitions',
    2544 : 'Gamecard initial data hash doesn\'t match the initial data hash in the card header',
    2545 : 'Gamecard initial data reserved area is not all zeros',
    2546 : 'Gamecard certificate kek index doesn\'t match card header kek index',
    2551 : 'Unable to read card header on gamecard init',
    2565 : 'Encountered SDMMC error in write operation',
    2600 : 'Attempted to switch lotus state machine to secure mode from a mode other than normal',
    2601 : 'Attempted to switch lotus state machine to normal mode from a mode other than initial',
    2602 : 'Attempted to switch lotus state machine to write mode from a mode other than normal',
    2634 : 'Error processing lotus command SetUserAsicFirmware',
    2637 : 'Error processing lotus command GetAsicCert',
    2640 : 'Error processing lotus command SetEmmcEmbeddedSocCertificate',
    2645 : 'Error processing lotus command GetAsicEncryptedMessage',
    2646 : 'Error processing lotus command SetLibraryEncryptedMessage',
    2651 : 'Error processing lotus command GetAsicAuthenticationData',
    2652 : 'Error processing lotus command SetAsicAuthenticationDataHash',
    2653 : 'Error processing lotus command SetLibraryAuthenticationData',
    2654 : 'Error processing lotus command GetLibraryAuthenticationDataHash',
    2657 : 'Error processing lotus command ExchangeRandomValuesInSecureMode',
    2668 : 'Error calling nn::gc::detail::GcCrypto::GenerateRandomBytes',
    2671 : 'Error processing lotus command ReadAsicRegister',
    2672 : 'Error processing lotus command GetGameCardIdSet',
    2674 : 'Error processing lotus command GetCardHeader',
    2676 : 'Error processing lotus command GetCardKeyArea',
    2677 : 'Error processing lotus command ChangeDebugMode',
    2678 : 'Error processing lotus command GetRmaInformation',
    2692 : 'Tried sending lotus card command Refresh when not in secure mode',
    2693 : 'Tried sending lotus card command when not in correct mode',
    2731 : 'Error processing lotus card command ReadId1',
    2732 : 'Error processing lotus card command ReadId2',
    2733 : 'Error processing lotus card command ReadId3',
    2735 : 'Error processing lotus card command ReadPage',
    2737 : 'Error processing lotus card command WritePage',
    2738 : 'Error processing lotus card command Refresh',
    2742 : 'Error processing lotus card command ReadCrc',
    2743 : 'Error processing lotus card command Erase or UnlockForceErase',
    2744 : 'Error processing lotus card command ReadDevParam',
    2745 : 'Error processing lotus card command WriteDevParam',
    2904 : 'Id2Normal did not match the value in the buffer returned by ChangeDebugMode',
    2905 : 'Id1Normal did not match Id1Writer when switching gamecard to write mode',
    2906 : 'Id2Normal did not match Id2Writer when switching gamecard to write mode',
    2954 : 'Invalid gamecard handle.',
    2960 : 'Invalid gamecard handle when opening normal gamecard partition',
    2961 : 'Invalid gamecard handle when opening secure gamecard partition',
    3001 : 'Unimplemented behavior',
    3003 : 'File/Directory already exists.',
    3201 : 'Memory allocation failure related to FAT filesystem code',
    3203 : 'Memory allocation failure related to FAT filesystem code',
    3204 : 'Memory allocation failure related to FAT filesystem code',
    3205 : 'Memory allocation failure related to FAT filesystem code',
    3206 : 'Memory allocation failure related to FAT filesystem code',
    3208 : 'Memory allocation failure related to FAT filesystem code',
    3244 : 'Allocation failure related to SD cards',
    3248 : 'Out of memory',
    3249 : 'Out of memory',
    3359 : 'Out of memory',
    3360 : 'Out of memory',
    3365 : 'Out of memory',
    4318 : 'Invalid save data filesystem magic (valid magic is SAVE in ASCII)',
    4513 : 'Error reading ACID section in NPDM',
    4514 : 'Invalid NPDM ACID section size',
    4515 : 'Last byte of the ACID modulus is zero',
    4516 : 'Invalid ACID fixed key signature',
    4517 : 'Invalid NCA magic',
    4518 : 'Invalid NCA header fixed key signature',
    4519 : 'Invalid NCA header ACID signature',
    4520 : 'Invalid NCA header section hash',
    4521 : 'Invalid NCA Key index',
    4523 : 'Invalid encryption type',
    4524 : 'Redirection BKTR table size is negative',
    4525 : 'Encryption BKTR table size is negative',
    4526 : 'Redirection BKTR table end offset is past the Encryption BKTR table start offset',
    4527 : 'NCA-path used with the wrong titleID.',
    4528 : 'NCA header value is out of range',
    4529 : 'NCA FS header value is out of range',
    4532 : 'PartitionFS hash block size is not a power of 2',
    4533 : 'PartitionFS hash "always_2" field is not 2',
    4534 : 'PartitionFS hash table is too small for main data',
    4535 : 'Invalid PartitionFS block hash',
    4642 : 'Invalid Partition file hashed region bounds',
    4643 : 'Invalid Partition FS hash',
    4644 : 'Invalid PFS0 magic',
    4645 : 'Invalid HFS0 magic',
    4646 : 'Invalid name offset for Partition FS file entry',
    4647 : 'Calculated Partition FS header size changed between 2 consecutive reads',
    4684 : 'Invalid FAT file number.',
    4686 : 'Invalid FAT format for BIS User partition.',
    4687 : 'Invalid FAT format for BIS System partition.',
    4688 : 'Invalid FAT format for BIS Safe partition.',
    4689 : 'Invalid FAT format for BIS Calibration partition.',
    4743 : 'Corrupted NAX0 header.',
    4744 : 'Invalid NAX0 magicnum.',
    5121 : 'Invalid FAT size',
    5122 : 'Invalid FAT BPB (BIOS Parameter Block)',
    5123 : 'Invalid FAT parameter',
    5124 : 'Invalid FAT sector',
    5125 : 'Invalid FAT sector',
    5126 : 'Invalid FAT sector',
    5127 : 'Invalid FAT sector',
    5301 : 'Mountpoint not found',
    6001 : 'Invalid input',
    6003 : 'Path too long',
    6004 : 'Invalid character.',
    6005 : 'Invalid directory path.',
    6006 : 'Unable to retrieve directory from path',
    6061 : 'Offset outside storage',
    6300 : 'Operation not supported',
    6301 : 'A specified filesystem has no MultiCommitTarget when doing a multi-filesystem commit',
    6302 : 'Attempted to resize a nn::fs::SubStorage or BufferedStorage that is marked as non-resizable',
    6303 : 'Attempted to resize a nn::fs::SubStorage or BufferedStorage when the SubStorage ends before the base storage',
    6304 : 'Attempted to call nn::fs::MemoryStorage::SetSize',
    6305 : 'Invalid Operation ID in nn::fs::MemoryStorage::OperateRange',
    6306 : 'Invalid Operation ID in nn::fs::FileStorage::OperateRange',
    6307 : 'Invalid Operation ID in nn::fs::FileHandleStorage::OperateRange',
    6308 : 'Invalid Operation ID in nn::fssystem::SwitchStorage::OperateRange',
    6309 : 'Invalid Operation ID in nn::fs::detail::StorageServiceObjectAdapter::OperateRange',
    6310 : 'Attempted to call nn::fssystem::AesCtrCounterExtendedStorage::Write',
    6311 : 'Attempted to call nn::fssystem::AesCtrCounterExtendedStorage::SetSize',
    6312 : 'Invalid Operation ID in nn::fssystem::AesCtrCounterExtendedStorage::OperateRange',
    6313 : 'Attempted to call nn::fssystem::AesCtrStorageExternal::Write',
    6314 : 'Attempted to call nn::fssystem::AesCtrStorageExternal::SetSize',
    6315 : 'Attempted to call nn::fssystem::AesCtrStorage::SetSize',
    6316 : 'Attempted to call nn::fssystem::save::HierarchicalIntegrityVerificationStorage::SetSize',
    6317 : 'Attempted to call nn::fssystem::save::HierarchicalIntegrityVerificationStorage::OperateRange',
    6318 : 'Attempted to call nn::fssystem::save::IntegrityVerificationStorage::SetSize',
    6319 : 'Attempted to invalidate the cache of a RomFs IVFC storage in nn::fssystem::save::IntegrityVerificationStorage::OperateRange',
    6320 : 'Invalid Operation ID in nn::fssystem::save::IntegrityVerificationStorage::OperateRange',
    6321 : 'Attempted to call nn::fssystem::save::BlockCacheBufferedStorage::SetSize',
    6322 : 'Attempted to invalidate the cache of something other than a savedata IVFC storage in nn::fssystem::save::BlockCacheBufferedStorage::OperateRange',
    6323 : 'Invalid Operation ID in nn::fssystem::save::BlockCacheBufferedStorage::OperateRange',
    6324 : 'Attempted to call nn::fssystem::IndirectStorage::Write',
    6325 : 'Attempted to call nn::fssystem::IndirectStorage::SetSize',
    6326 : 'Invalid Operation ID in nn::fssystem::IndirectStorage::OperateRange',
    6327 : 'Attempted to call nn::fssystem::SparseStorage::ZeroStorage::Write',
    6328 : 'Attempted to call nn::fssystem::SparseStorage::ZeroStorage::SetSize',
    6329 : 'Attempted to call nn::fssystem::HierarchicalSha256Storage::SetSize',
    6330 : 'Attempted to call nn::fssystem::ReadOnlyBlockCacheStorage::Write',
    6331 : 'Attempted to call nn::fssystem::ReadOnlyBlockCacheStorage::SetSize',
    6332 : 'Attempted to call nn::fssystem::IntegrityRomFsStorage::SetSize',
    6333 : 'Attempted to call nn::fssystem::save::DuplexStorage::SetSize',
    6334 : 'Invalid Operation ID in nn::fssystem::save::DuplexStorage::OperateRange',
    6335 : 'Attempted to call nn::fssystem::save::HierarchicalDuplexStorage::SetSize',
    6336 : 'Attempted to call nn::fssystem::save::RemapStorage::GetSize',
    6337 : 'Attempted to call nn::fssystem::save::RemapStorage::SetSize',
    6338 : 'Invalid Operation ID in nn::fssystem::save::RemapStorage::OperateRange',
    6339 : 'Attempted to call nn::fssystem::save::IntegritySaveDataStorage::SetSize',
    6340 : 'Invalid Operation ID in nn::fssystem::save::IntegritySaveDataStorage::OperateRange',
    6341 : 'Attempted to call nn::fssystem::save::JournalIntegritySaveDataStorage::SetSize',
    6342 : 'Invalid Operation ID in nn::fssystem::save::JournalIntegritySaveDataStorage::OperateRange',
    6343 : 'Attempted to call nn::fssystem::save::JournalStorage::GetSize',
    6344 : 'Attempted to call nn::fssystem::save::JournalStorage::SetSize',
    6345 : 'Invalid Operation ID in nn::fssystem::save::JournalStorage::OperateRange',
    6346 : 'Attempted to call nn::fssystem::save::UnionStorage::SetSize',
    6347 : 'Attempted to call nn::fssystem::dbm::AllocationTableStorage::SetSize',
    6348 : 'Attempted to call nn::fssrv::fscreator::WriteOnlyGameCardStorage::Read',
    6349 : 'Attempted to call nn::fssrv::fscreator::WriteOnlyGameCardStorage::SetSize',
    6350 : 'Attempted to call nn::fssrv::fscreator::ReadOnlyGameCardStorage::Write',
    6351 : 'Attempted to call nn::fssrv::fscreator::ReadOnlyGameCardStorage::SetSize',
    6352 : 'Invalid Operation ID in nn::fssrv::fscreator::ReadOnlyGameCardStorage::OperateRange',
    6353 : 'Attempted to call SdStorage::SetSize',
    6354 : 'Invalid Operation ID in SdStorage::OperateRange',
    6355 : 'Invalid Operation ID in nn::fat::FatFile::DoOperateRange',
    6356 : 'Invalid Operation ID in nn::fssystem::StorageFile::DoOperateRange',
    6357 : 'Attempted to call nn::fssystem::ConcatenationFile::SetSize',
    6358 : 'Attempted to call nn::fssystem::ConcatenationFile::OperateRange',
    6359 : 'Invalid Query ID in nn::fssystem::ConcatenationFileSystem::DoQueryEntry',
    6360 : 'Invalid Operation ID in nn::fssystem::ConcatenationFile::DoOperateRange',
    6361 : 'Attempted to call nn::fssystem::ZeroBitmapFile::SetSize',
    6362 : 'Invalid Operation ID in nn::fs::detail::FileServiceObjectAdapter::DoOperateRange',
    6363 : 'Invalid Operation ID in nn::fssystem::AesXtsFile::DoOperateRange',
    6364 : 'Attempted to modify a nn::fs::RomFsFileSystem',
    6365 : 'Attempted to call nn::fs::RomFsFileSystem::DoCommitProvisionally',
    6366 : 'Attempted to query the space in a nn::fs::RomFsFileSystem',
    6367 : 'Attempted to modify a nn::fssystem::RomFsFile',
    6368 : 'Invalid Operation ID in nn::fssystem::RomFsFile::DoOperateRange',
    6369 : 'Attempted to modify a nn::fs::ReadOnlyFileSystemTemplate',
    6370 : 'Attempted to call nn::fs::ReadOnlyFileSystemTemplate::DoCommitProvisionally',
    6371 : 'Attempted to query the space in a nn::fs::ReadOnlyFileSystemTemplate',
    6372 : 'Attempted to modify a nn::fs::ReadOnlyFileSystemFile',
    6373 : 'Invalid Operation ID in nn::fs::ReadOnlyFileSystemFile::DoOperateRange',
    6374 : 'Attempted to modify a nn::fssystem::PartitionFileSystemCore',
    6375 : 'Attempted to call nn::fssystem::PartitionFileSystemCore::DoCommitProvisionally',
    6376 : 'Attempted to call nn::fssystem::PartitionFileSystemCore::PartitionFile::DoSetSize',
    6377 : 'Invalid Operation ID in nn::fssystem::PartitionFileSystemCore::PartitionFile::DoOperateRange',
    6378 : 'Invalid Operation ID in nn::fssystem::TmFileSystemFile::DoOperateRange',
    6379 : 'Attempted to call unsupported functions in nn::fssrv::fscreator::SaveDataInternalStorageFileSystem, nn::fssrv::detail::SaveDataInternalStorageAccessor::PaddingFile or nn::fssystem::save::detail::SaveDataExtraDataInternalStorageFile',
    6382 : 'Attempted to call nn::fssystem::ApplicationTemporaryFileSystem::DoCommitProvisionally',
    6383 : 'Attempted to call nn::fssystem::SaveDataFileSystem::DoCommitProvisionally',
    6384 : 'Attempted to call nn::fssystem::DirectorySaveDataFileSystem::DoCommitProvisionally',
    6385 : 'Attempted to call nn::fssystem::ZeroBitmapHashStorageFile::Write',
    6386 : 'Attempted to call nn::fssystem::ZeroBitmapHashStorageFile::SetSize',
    6400 : 'Permission denied',
    6451 : 'Missing titlekey(?) required to mount content',
    6455 : 'File not closed',
    6456 : 'Directory not closed',
    6457 : 'Writable file not closed when committing',
    6458 : 'FS allocators already registered',
    6459 : 'FS allocators already used',
    6461 : 'FS allocator alignment violation',
    6602 : 'File not found.',
    6603 : 'Directory not found.',
    6710 : 'Multi-commit limit reached',
    6905 : 'Mount name not found in table.',
    7902 : 'RomFs table: Entry not found in dictionary',
    7903 : 'RomFs table: File not found',
    7904 : 'RomFs table: Directory not found',
    7906 : 'RomFs table: Entry already exists when trying to add a new entry',
    7907 : 'RomFs table: Insufficient space to add new entry',
    7908 : 'RomFs table: Unable to add new directory',
    7909 : 'RomFs table: Unable to add new file',
    7910 : 'RomFs directory has no more child directories/files when iterating',
    7914 : 'RomFs table: Path is file, not directory'
};

OSInfo.descriptions = {
    4 : 'OS busy',
    7 : 'Invalid parameter',
    8 : 'Out of memory',
    9 : 'Out of resources',
    501 : 'Invalid handle',
    503 : 'Invalid memory mirror',
    1023 : 'TLS slot is not allocated'
}

NCMInfo.descriptions = {
    5 : 'NcaID not found. Returned when attempting to mount titles which exist that aren\'t *8XX titles, the same way *8XX titles are mounted.',
    7 : 'TitleId not found',
    12 : 'Invalid StorageId',
    110 : 'Gamecard not inserted',
    190 : 'Gamecard not initialized',
    250 : 'Sdcard not inserted',
    260 : 'Storage not mounted'
}

DDInfo.descriptions = {
    4 : 'Converted from error 0xD401',
    8 : 'Converted from error 0xE401'
}

LRInfo.descriptions = {
    2 : 'Program location entry not found',
    3 : 'Invalid context for control location',
    4 : 'Storage not found',
    5 : 'Access denied',
    6 : 'Offline manual HTML location entry not found',
    7 : 'Title is not registered',
    8 : 'Control location entry for host not found',
    9 : 'Legal info HTML location entry not found'
}

loaderInfo.descriptions = {
    1 : 'Args too long.',
    2 : 'Maximum processes loaded.',
    3 : 'NPDM too big.',
    4 : 'Invalid NPDM.',
    5 : 'Invalid NSO.',
    6 : 'Invalid Path.',
    7 : 'Already registered.',
    8 : 'Title not found.',
    9 : 'Title-id in ACI0 doesn\'t match range in ACID.',
    10 : 'Invalid version in NPDM.',
    51 : 'Insufficient address space.',
    52 : 'Insufficient NRO.',
    53 : 'Invalid NRR',
    54 : 'Invalid signature',
    55 : 'Insufficient NRO registrations.',
    56 : 'Insufficient NRR registrations.',
    57 : 'NRO Already loaded.',
    81 : 'Unaligned NRR address',
    82 : 'Bad NRR size',
    84 : 'NRR Not Loaded.',
    85 : 'Bad NRR address',
    87 : 'Bad initialization',
    100 : 'Unknown ACI0 descriptor',
    103 : 'ACID/ACI0 don\'t match for descriptor "KernelFlags"',
    104 : 'ACID/ACI0 don\'t match for descriptor "SyscallMask"',
    106 : 'ACID/ACI0 don\'t match for descriptor "MapIoOrNormalRange"',
    107 : 'ACID/ACI0 don\'t match for descriptor "MapNormalPage"',
    111 : 'ACID/ACI0 don\'t match for descriptor "InterruptPair"',
    113 : 'ACID/ACI0 don\'t match for descriptor "ApplicationType"',
    114 : 'ACID/ACI0 don\'t match for descriptor "KernelReleaseVersion"',
    115 : 'ACID/ACI0 don\'t match for descriptor "HandleTableSize"',
    116 : 'ACID/ACI0 don\'t match for descriptor "DebugFlags"'
}

CMIFInfo.descriptions = {
    202 : 'Invalid CMIF header size.',
    211 : 'Invalid CMIF input header.',
    212 : 'Invalid CMIF output header.',
    221 : 'Invalid method dispatch ID.',
    235 : 'Invalid in object count.',
    236 : 'Invalid out object count.',
    301 : 'Out of domain entries.'
}

HIPCInfo.descriptions = {
    1 : 'Unsupported operation',
    102 : 'Out of server session memory',
    141 : 'Went past maximum during marshalling.',
    200 : 'Session doesn\'t support domains.',
    301 : 'Remote process is dead.',
    403 : 'Unknown request type',
    491 : 'IPC Query 1 failed.'
}
//Module 15
PMInfo.descriptions = {
    1 : 'Pid not found',
    3 : 'Process has no pending events',
    5 : 'Application already running'
}

var NXModules = {1 : kernelInfo, 2 : FSInfo, 3 : OSInfo, 4 : HtcsInfo, 5 : NCMInfo, 6 : DDInfo, 7 : debugMonitorInfo, 8 : LRInfo, 9 : loaderInfo, 10 : CMIFInfo, 11 : HIPCInfo, 15 : PMInfo, 16 : NSInfo, 17 : BsdsocketsInfo, 18 : HtcInfo, 19 : TSCInfo, 20 : NCMInfo, 21 : SMInfo, 22 : ROInfo, 23 : GCInfo, 24 : SDMMCInfo, 25 : OVLNInfo, 26 : SPLInfo, 27 : socketInfo, 29 : HtclowInfo, 30 : busInfo, 31 : HtcfsInfo, 32 : AsyncInfo, 100 : ETHCInfo, 101 : I2CInfo, 102 : GPIOInfo, 103 : UARTInfo, 105 : settingsInfo, 107 : WLANInfo, 108 : XCDInfo, 110 : NIFMInfo, 111 : HwopusInfo, 112 : SasbusInfo, 113 : bluetoothInfo, 114 : VIInfo, 115 : NFPInfo, 116 : timeInfo, 117 : FGMInfo, 118 : OEInfo, 120 : PCIeInfo, 121 : friendsInfo, 122 : BCATInfo, 123 : SSLInfo, 124 : accountInfo, 125 : newsInfo, 126 : miiInfo, 127 : NFCInfo, 128 : AMInfo, 129 : playReportInfo, 130 : AHIDInfo, 132 : homeMenuInfo, 133 : PCVInfo, 134 : OMMInfo, 135 : BPCInfo, 136 : PSMInfo, 137 : NIMInfo, 138 : PSCInfo, 139 : TCInfo, 140 : USBInfo, 141 : NSDInfo, 142 : PCTLinfo, 143 : BTMInfo, 144 : LAInfo, 145 : ETicketInfo, 146 : NGCInfo, 147 : errorReportInfo, 148 : APMInfo, 149 : CECInfo, 150 : profilerInfo, 151 : errorUploadInfo, 153 : audioInfo, 154 : NPNSInfo, 155 : NPNSXMPPStreamInfo, 157 : ARPInfo, 158 : updaterInfo, 159 : SWKBDInfo, 161 : MifareInfo, 162 : userlandAInfo, 163 : fatalInfo, 164 : ECInfo, 165 : SPSMInfo, 167 : BGTCInfo, 168 : userlandCInfo, 169 : SasbusPeriodicReceiveModeInfo, 178 : PDMInfo, 179 : OLSCInfo, 180 : SREPOInfo, 181 : DauthInfo, 187 : SasbusInfo, 189 : PWMInfo, 191 : RTCInfo, 192 : regulatorInfo, 193 : LEDInfo, 197 : clkrstInfo, 202 : HIDInfo, 203 : LDNInfo, 205 : lrsensorInfo, 206 : captureInfo, 208 : manuInfo, 209 : ATKInfo, 210 : webInfo, 211 : LCSInfo, 212 : GRCInfo, 214 : albumInfo, 216 : migrationInfo, 217 : migrationIdcServerInfo, 218 : hidbusInfo, 223 : websocketInfo, 229 : notificationInfo, 230 : insInfo, 231 : lp2pInfo};

module.exports = {NXModules};

