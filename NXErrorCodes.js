//All info taken from here https://switchbrew.org/wiki/Error_codes

let errorInfo = class {
    moduleName = '';
    descriptions = {};
    constructor(name) {this.moduleName = name};
};

//Official Nintendo modules
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
var bluetoothInfo = new errorInfo('Bluetooth');
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
var IRsensorInfo = new errorInfo('lrsensor');
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

//Homebrew modules
var libnxInfo = new errorInfo('libnx');
var homebrewABIInfo = new errorInfo('Homebrew ABI');
var homebrewLoaderInfo = new errorInfo('Homebrew Loader');
var libnxNVIDIAErrorsInfo = new errorInfo('libnx NVIDIA errors');
var libnxBinderErrorsInfo = new errorInfo('libnx Binder errors');

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

PMInfo.descriptions = {
    1 : 'Pid not found',
    3 : 'Process has no pending events',
    5 : 'Application already running'
}

NSInfo.descriptions = {
    2 : 'Title-id not found',
    120 : 'Sysupdate not required',
    251 : 'Unexpected StorageId',
    340 : 'IsAnyInternetRequestAccepted with the output from GetClientId returned false.',
    801 : 'SystemDeliveryInfo system_delivery_protocol_version is less than the system-setting.',
    802 : 'SystemDeliveryInfo system_delivery_protocol_version is larger than the system-setting.',
    931 : 'Invalid SystemDeliveryInfo HMAC / invalid Meta Id.',
    892 : 'Unknown state ref-count is zero.'
}

SMInfo.descriptions = {
    1 : 'Out of processes',
    2 : 'Not initialized.',
    3 : 'Max sessions',
    4 : 'Service already registered',
    5 : 'Out of services',
    6 : 'Invalid name (all zeroes)',
    7 : 'Service not registered',
    8 : 'Permission denied',
    9 : 'Service Access Control too big.'
}


ROInfo.descriptions = {
    2 : 'Address space is full',
    3 : 'NRO already loaded',
    4 : 'Invalid NRO header values',
    6 : 'Bad NRR magic',
    8 : 'Reached max NRR count',
    9 : 'Unable to verify NRO hash or NRR signature',
    1025 : 'Address not page-aligned',
    1026 : 'Incorrect NRO size',
    1028 : 'NRO not loaded',
    1029 : 'NRR not loaded',
    1030 : 'Already initialized',
    1031 : 'Not initialized'
}

SPLInfo.descriptions = {
    1 : 'SMC is not implemented',
    2 : 'SMC argument is invalid',
    3 : 'SMC is currently in progress/secmon is busy',
    4 : 'Secmon not currently performing async operation',
    5 : 'Invalid SMC async callback key',
    6 : 'SMC is blacklisted during current boot',
    100 : 'Invalid (buffer) size',
    101 : 'Unknown SMC error',
    101 : 'Decryption failure',
    104 : 'No AES keyslots available',
    105 : 'Invalid AES keyslot',
    106 : 'BootReason already set',
    107 : 'BootReason not set',
    108 : 'Invalid argument'
}

homebrewLoaderInfo.descriptions = {
    3 : 'Failed to open NRO file. May also happen when SD card isn\'t inserted / SD mounting failed earlier.',
    4 : 'Failed to read NRO header.',
    5 : 'Invalid NRO magic.',
    6 : 'Invalid NRO segments.',
    7 : 'Failed to read NRO.',
    9 : 'Failed to allocate heap.',
    18 : 'Failed to map code-binary memory.',
    19 : 'Failed to map code memory (.text).',
    20 : 'Failed to map code memory (.rodata).',
    21 : 'Failed to map code memory (.data+.bss).',
    24 : 'Failed to unmap code memory (.text).',
    25 : 'Failed to unmap code memory (.rodata).',
    26 : 'Failed to unmap code memory (.data+.bss).'
}

settingsInfo.descriptions = {
    201 : 'Null settings name',
    202 : 'Null settings key',
    203 : 'Null settings value',
    205 : 'Null settings value buffer',
    208 : 'Null setting value size buffer',
    209 : 'Null debug mode flag buffer',
    221 : 'Setting group name has zero length',
    222 : 'Empty settings item key',
    241 : 'Setting group name is too long (64 character limit?)',
    242 : 'Setting name is too long (64 character limit?)',
    261 : 'Setting group name ends with \'.\' or contains invalid characters (allowed: [a-z0-9_\-.])',
    262 : 'Setting name ends with \'.\' or contains invalid characters (allowed: [a-z0-9_\-.])',
    621 : 'Null language code buffer',
    631 : 'Null network settings buffer',
    632 : 'Null network settings output count buffer',
    641 : 'Null backlight settings buffer',
    651 : 'Null Bluetooth device setting buffer',
    652 : 'Null Bluetooth device setting output count buffer',
    653 : 'Null Bluetooth enable flag buffer',
    654 : 'Null Bluetooth AFH enable flag buffer',
    655 : 'Null Bluetooth boost enable flag buffer',
    656 : 'Null BLE pairing settings buffer',
    657 : 'Null BLE pairing settings entry count buffer',
    661 : 'Null external steady clock source ID buffer',
    662 : 'Null user system clock context buffer',
    663 : 'Null network system clock context buffer',
    664 : 'Null user system clock automatic correction enabled flag buffer',
    665 : 'Null shutdown RTC value buffer',
    666 : 'Null external steady clock internal offset buffer',
    671 : 'Null account settings buffer',
    681 : 'Null audio volume buffer',
    683 : 'Null ForceMuteOnHeadphoneRemoved buffer',
    684 : 'Null headphone volume warning count buffer',
    687 : 'Invalid audio output mode',
    688 : 'Null headphone volume update flag buffer',
    691 : 'Null console information upload flag buffer',
    701 : 'Null automatic application download flag buffer',
    702 : 'Null notification settings buffer',
    703 : 'Null account notification settings entry count buffer',
    704 : 'Null account notification settings buffer',
    711 : 'Null vibration master volume buffer',
    712 : 'Null NX controller settings buffer',
    713 : 'Null NX controller settings entry count buffer',
    714 : 'Null USB full key enable flag buffer',
    721 : 'Null TV settings buffer',
    722 : 'Null EDID buffer',
    731 : 'Null data deletion settings buffer',
    741 : 'Null initial system applet program ID buffer',
    742 : 'Null overlay disp program ID buffer',
    743 : 'Null IsInRepairProcess buffer',
    744 : 'Null RequiresRunRepairTimeReviser buffer',
    751 : 'Null device timezone location name buffer',
    761 : 'Null primary album storage buffer',
    771 : 'Null USB 3.0 enable flag buffer',
    772 : 'Null USB Type-C power source circuit version buffer',
    781 : 'Null battery lot buffer',
    791 : 'Null serial number buffer',
    801 : 'Null lock screen flag buffer',
    803 : 'Null color set ID buffer',
    804 : 'Null quest flag buffer',
    805 : 'Null wireless certification file size buffer',
    806 : 'Null wireless certification file buffer',
    807 : 'Null initial launch settings buffer',
    808 : 'Null device nickname buffer',
    809 : 'Null battery percentage flag buffer',
    810 : 'Null applet launch flags buffer',
    1012 : 'Null wireless LAN enable flag buffer',
    1021 : 'Null product model buffer',
    1031 : 'Null NFC enable flag buffer',
    1041 : 'Null ECI device certificate buffer',
    1042 : 'Null E-Ticket device certificate buffer',
    1051 : 'Null sleep settings buffer',
    1061 : 'Null EULA version buffer',
    1062 : 'Null EULA version entry count buffer',
    1071 : 'Null LDN channel buffer',
    1081 : 'Null SSL key buffer',
    1082 : 'Null SSL certificate buffer',
    1091 : 'Null telemetry flags buffer',
    1101 : 'Null Gamecard key buffer',
    1102 : 'Null Gamecard certificate buffer',
    1111 : 'Null PTM battery lot buffer',
    1112 : 'Null PTM fuel gauge parameter buffer',
    1121 : 'Null ECI device key buffer',
    1122 : 'Null E-Ticket device key buffer',
    1131 : 'Null speaker parameter buffer',
    1141 : 'Null firmware version buffer',
    1142 : 'Null firmware version digest buffer',
    1143 : 'Null rebootless system update version buffer',
    1151 : 'Null Mii author ID buffer',
    1161 : 'Null fatal flags buffer',
    1171 : 'Null auto update enable flag buffer',
    1181 : 'Null external RTC reset flag buffer',
    1191 : 'Null push notification activity mode buffer',
    1201 : 'Null service discovery control setting buffer',
    1211 : 'Null error report share permission buffer',
    1221 : 'Null LCD vendor ID buffer',
    1231 : 'Null console SixAxis sensor acceleration bias buffer',
    1232 : 'Null console SixAxis sensor angular velocity bias buffer',
    1233 : 'Null console SixAxis sensor acceleration gain buffer',
    1234 : 'Null console SixAxis sensor angular velocity gain buffer',
    1235 : 'Null console SixAxis sensor angular velocity time bias buffer',
    1236 : 'Null console SixAxis sensor angular acceleration buffer',
    1241 : 'Null keyboard layout buffer',
    1245 : 'Invalid keyboard layout',
    1251 : 'Null web inspector flag buffer',
    1252 : 'Null allowed SSL hosts buffer',
    1253 : 'Null allowed SSL hosts entry count buffer',
    1254 : 'Null host FS mount point buffer',
    1271 : 'Null Amiibo key buffer',
    1272 : 'Null Amiibo ECQV certificate buffer',
    1273 : 'Null Amiibo ECDSA certificate buffer',
    1274 : 'Null Amiibo ECQV BLS key buffer',
    1275 : 'Null Amiibo ECQV BLS certificate buffer',
    1276 : 'Null Amiibo ECQV BLS root certificate buffer'
}

VIInfo.descriptions = {
    1 : 'Generic error',
    6 : 'Unsupported operation'
}

timeInfo.descriptions = {
    0 : 'Time service not initialized',
    1 : 'Permission denied',
    102 : 'Time not set / Clock Source Id mismatch',
    200 : 'Invalid time comparison',
    201 : 'Signed overflow/underflow',
    801 : 'Memory allocation failure',
    901 : 'Null pointer',
    902 : 'Value out of valid range',
    903 : 'TimeZoneRule conversion failed',
    989 : 'TimeZone location name not found',
    990 : 'Unimplemented functionality'
}

friendsInfo.descriptions = {
    6 : 'IsAnyInternetRequestAccepted with the output from GetClientId returned false.'
}

BCATInfo.descriptions = {
    1 : 'Invalid argument',
    2 : 'Object not found',
    3 : 'Object locked/in used',
    4 : 'Target already mounted',
    5 : 'Target not mounted',
    6 : 'Object already opened',
    7 : 'Object not opened',
    8 : 'IsAnyInternetRequestAccepted with the output from GetClientId returned false.',
    80 : 'Passphrase not found',
    81 : 'Data verification failed',
    90 : 'Invalid API call',
    98 : 'Invalid operation'
}

accountInfo.descriptions = {
    20 : 'Argument is NULL',
    22 : 'Argument is invalid',
    30 : 'Bad input buffer size',
    32 : 'Invalid input buffer',
    59 : 'IsAnyInternetRequestAccepted with the output from GetClientId returned false.'
}

miiInfo.descriptions = {
    1 : 'Invalid argument',
    4 : 'Entry not found',
    67 : 'Invalid database signature value (should be "NFDB")',
    69 : 'Invalid database entry count',
    204 : 'Development/debug-only behavior'
}

AMInfo.descriptions = {
    2 : 'IStorage not available.',
    35 : 'Error while launching applet.',
    37 : 'Title-ID not found. Caused by code 0x410 when applet launch fails',
    500 : 'Invalid input',
    502 : 'IStorage has already been opened by another accessor',
    503 : 'IStorage Read/Write out-of-bounds',
    511 : 'IStorage opened as wrong type (data opened as transfermem, transfermem opened as data)',
    512 : 'Unbalanced fatal section leave (returned when executing LeaveFatalSection without a preceding EnterFatalSection call)',
    600 : 'Failed to allocate memory for IStorage',
    712 : 'Thread stack pool exhausted (out of memory)',
    974 : 'DebugMode not enabled',
    980 : 'am.debug!dev_function setting needs to be set / DebugMode not enabled',
    998 : 'Not implemented'
}

playReportInfo.descriptions = {
    102 : 'Transmission not agreed',
    105 : 'Network unavailable',
    1005 : 'HTTP error: Couldnt resolve proxy',
    1006 : 'HTTP error: Couldnt resolve host',
    1007 : 'HTTP error: Couldnt connect',
    1023 : 'HTTP error: Write error',
    1026 : 'HTTP error: Read error',
    1027 : 'HTTP error: Out of memory',
    1028 : 'HTTP error: Operation timedout',
    1035 : 'HTTP error: SSL connect error',
    1051 : 'HTTP error: Peer failed verification',
    1052 : 'HTTP error: Got nothing',
    1055 : 'HTTP error: Send error',
    1056 : 'HTTP error: Recv error',
    1058 : 'HTTP error: SSL cert problem',
    1059 : 'HTTP error: SSL cipher',
    1060 : 'HTTP error: SSL CA cert',
    2400 : 'Server error: Status 400',
    2401 : 'Server error: Status 401',
    2403 : 'Server error: Status 403',
    2500 : 'Server error: Status 500',
    2503 : 'Server error: Status 503',
    2504 : 'Server error: Status 504'
}

PCVInfo.descriptions = {
    2 : 'Invalid DVFS table ID',
    4 : 'Invalid parameter'
}

NIMInfo.descriptions = {
    10  : 'Already initialized.',
    30  : 'Task not found.',
    40  : 'Memory allocation failed / bad input.',
    330  : 'ContentMetaType doesn\'t match SystemUpdate.',
    5001  : 'One of the following socket errors occurred: ENETDOWN, ECONNRESET, EHOSTDOWN, EHOSTUNREACH, or EPIPE. Also occurs when the received size doesn\'t match the expected size (recvfrom() ret with meta_size data receiving).',
    5010  : 'Socket was shutdown() due to the async operation being cancelled.',
    5020  : 'Too many internal output entries with nim cmd42, system is Internet-connected, or an unrecognized socket error occured.',
    5100  : 'Connection timeout.',
    5410  : 'Invalid ID.',
    5420  : 'Invalid magicnum. Can also be caused by the connection being closed by the peer, since non-negative return values from recv() are ignored in this case.',
    5430  : 'Invalid data_size.',
    5440  : 'The input ContentMetaKey doesn\'t match the ContentMetaKey in state.',
    5450  : 'Invalid meta_size.',
    7001  : 'HTTP invalid response code (>=600).',
    7002  : 'HTTP invalid client response code (4xx).',
    7003  : 'HTTP invalid server response code (5xx).',
    7004  : 'HTTP invalid redirect response code (3xx).',
    7300 : 'HTTP response code 300.',
    7301 : 'HTTP response code 301.',
    7302 : 'HTTP response code 302.',
    7303 : 'HTTP response code 303.',
    7304 : 'HTTP response code 304.',
    7305 : 'HTTP response code 305.',
    7306 : 'HTTP response code 306.',
    7307 : 'HTTP response code 307.',
    7308 : 'HTTP response code 308.',
    7400 : 'HTTP response code 400.',
    7401 : 'HTTP response code 401.',
    7402 : 'HTTP response code 402.',
    7403 : 'HTTP response code 403.',
    7404 : 'HTTP response code 404.',
    7405 : 'HTTP response code 405.',
    7406 : 'HTTP response code 406.',
    7407 : 'HTTP response code 407.',
    7408 : 'HTTP response code 408.',
    7409 : 'HTTP response code 409.',
    7410 : 'HTTP response code 410.',
    7411 : 'HTTP response code 411.',
    7412 : 'HTTP response code 412.',
    7413 : 'HTTP response code 413.',
    7414 : 'HTTP response code 414.',
    7415 : 'HTTP response code 415.',
    7416 : 'HTTP response code 416.',
    7417 : 'HTTP response code 417.',
    //Switchbrew has incorrect descriptions??
    7500  : 'HTTP response code 500-308.',
    7501 : 'HTTP response code 500-308.',
    7502 : 'HTTP response code 500-308.',
    7503 : 'HTTP response code 500-308.',
    7504 : 'HTTP response code 500-308.',
    7505 : 'HTTP response code 500-308.',
    7506 : 'HTTP response code 500-308.',
    7507 : 'HTTP response code 500-308.',
    7508 : 'HTTP response code 500-308.',
    7509 : 'HTTP response code 500-308.',
    7800  : 'Unknown/invalid libcurl error.',
    //Todo: 8001-8096
    //8001-8096  : 'libcurl error 1-96. Some of the libcurl errors in the error-table map to the above unknown-libcurl-error however.'
}

PSCInfo.descriptions = {
    3 : 'Not initialized.'
}

USBInfo.descriptions = {
    51 : 'USB data-transfer in progress',
    106 : 'Invalid descriptor',
    201 : 'USB device not bound / interface already enabled'
}

PCTLInfo.descriptions = {
    223 : 'IsAnyInternetRequestAccepted with the output from GetClientId returned false.'
}

LAInfo.descriptions = {
    1 : 'Exited Abnormally (ExitReason == Abormal)',
    3 : 'Canceled (ExitReason == Canceled)',
    4 : 'Rejected',
    5 : 'Exited Unexpectedly (ExitReason == Unexpected)'
}

audioInfo.descriptions = {
    1 : 'Invalid audio device',
    2 : 'Operation couldn\'t complete successfully',
    3 : 'Invalid sample rate',
    4 : 'Buffer size too small',
    8 : 'Too many buffers are still unreleased',
    10 : 'Invalid channel count',
    513 : 'Invalid/Unsupported operation',
    1536 : 'Invalid handle',
    1540 : 'Audio output was already started'
}

ARPInfo.descriptions = {
    30 : 'Address is NULL',
    31 : 'PID is NULL',
    42 : 'Already bound',
    102 : 'Invalid PID'
}

updaterInfo.descriptions = {
    2 : 'BootImagePackage not found',
    3 : 'Invalid BootImagePackage',
    4 : 'Work buffer too small',
    5 : 'Work buffer not aligned',
    6 : 'BootImages need repair'
}

fatalInfo.descriptions = {
    5 : 'System is booting up repair process without VOL+ held down.',
    6 : 'System is booting up repair process that requires RepairTimeReviser but does not have special cartridge inserted.'
}

ECInfo.descriptions = {
    56 : 'IsAnyInternetRequestAccepted with the output from GetClientId returned false.'
}

PDMInfo.descriptions = {
    100 : 'Invalid user ID',
    101 : 'User does not exist',
    150 : 'Service unavailable',
    200 : 'File storage failure'
}

SREPOInfo.descriptions = {
    5 : 'Invalid event ID'
}

DauthInfo.descriptions = {
    4007 : 'Device authentication error: System update required',
    4008 : 'Device authentication error: Banned',
    4009 : 'Device authentication error: Internal server error',
    4007 : 'Device authentication error: Under maintenance'
}

HIDInfo.descriptions = {
    709 : 'Npad ID is out of range. '
}

IRsensorInfo.descriptions = {
    120 : 'IR image data not available/ready.',
    212 : 'IR camera handle pointer is null.',
    204 : 'IR camera invalid handle value.'
}

captureInfo.descriptions = {
    2 : 'Invalid argument.',
    3 : 'Out of memory.',
    8 : 'Out of range. Buffer needs to be aligned.',
    12 : 'Invalid FileId.',
    13 : 'Invalid storage ID.',
    14 : 'Invalid content type.',
    21 : 'Failed to mount Image Directory.',
    23 : 'File too big.',
    24 : 'Invalid file size.',
    30 : 'Buffer insufficient.',
    1401 : 'Too many files already saved.'
}

hidbusInfo.descriptions = {
    2 : 'StatusManager entry IsValid flag not set, or controller-update currently in-progress.',
    3 : 'Controller-update failed via the LibraryApplet.',
    4 : 'Invalid BusHandle.',
    5 : 'StatusManager entry flag +0x0 not set, or device not connected.',
    7 : 'PollingReceivedData not available.',
    8 : 'StatusManager entry DeviceEnabled flag not set, or flag +0x0 not set.',
    9 : 'ExternalDeviceId mismatch.',
    10 : 'BusHandle already initialized.'
}

userlandAInfo.descriptions = {
    2 : 'Can be triggered by running svcBreak. The svcBreak params have no effect on the value of the thrown error-code.'
}

userlandCInfo.descriptions = {
    0 : 'Userland ARM undefined instruction exception',
    1 : 'Userland ARM prefetch-abort due to PC set to non-executable region',
    2 : 'Userland ARM data abort. Also caused by abnormal process termination via svcExitProcess. Note: directly jumping to nnMain()-retaddr from non-main-thread has the same result.',
    3 : 'Userland PC address not aligned to 4 bytes',
    8 : 'Can occur when attempting to call an svc outside the whitelist'
}

//For the special 0xA83 error code
var A83Info = new errorInfo('Unknown');
A83Info.descriptions = {5 : 'Unrecognized applet ID'};

var NXModules = {1 : kernelInfo, 2 : FSInfo, 3 : OSInfo, 4 : HtcsInfo, 5 : NCMInfo, 6 : DDInfo, 7 : debugMonitorInfo, 8 : LRInfo, 9 : loaderInfo, 10 : CMIFInfo, 11 : HIPCInfo, 15 : PMInfo, 16 : NSInfo, 17 : BsdsocketsInfo, 18 : HtcInfo, 19 : TSCInfo, 20 : NCMInfo, 21 : SMInfo, 22 : ROInfo, 23 : GCInfo, 24 : SDMMCInfo, 25 : OVLNInfo, 26 : SPLInfo, 27 : socketInfo, 29 : HtclowInfo, 30 : busInfo, 31 : HtcfsInfo, 32 : AsyncInfo, 100 : ETHCInfo, 101 : I2CInfo, 102 : GPIOInfo, 103 : UARTInfo, 105 : settingsInfo, 107 : WLANInfo, 108 : XCDInfo, 110 : NIFMInfo, 111 : HwopusInfo, 112 : SasbusInfo, 113 : bluetoothInfo, 114 : VIInfo, 115 : NFPInfo, 116 : timeInfo, 117 : FGMInfo, 118 : OEInfo, 120 : PCIeInfo, 121 : friendsInfo, 122 : BCATInfo, 123 : SSLInfo, 124 : accountInfo, 125 : newsInfo, 126 : miiInfo, 127 : NFCInfo, 128 : AMInfo, 129 : playReportInfo, 130 : AHIDInfo, 132 : homeMenuInfo, 133 : PCVInfo, 134 : OMMInfo, 135 : BPCInfo, 136 : PSMInfo, 137 : NIMInfo, 138 : PSCInfo, 139 : TCInfo, 140 : USBInfo, 141 : NSDInfo, 142 : PCTLInfo, 143 : BTMInfo, 144 : LAInfo, 145 : ETicketInfo, 146 : NGCInfo, 147 : errorReportInfo, 148 : APMInfo, 149 : CECInfo, 150 : profilerInfo, 151 : errorUploadInfo, 153 : audioInfo, 154 : NPNSInfo, 155 : NPNSXMPPStreamInfo, 157 : ARPInfo, 158 : updaterInfo, 159 : SWKBDInfo, 161 : mifareInfo, 162 : userlandAInfo, 163 : fatalInfo, 164 : ECInfo, 165 : SPSMInfo, 167 : BGTCInfo, 168 : userlandCInfo, 169 : SasbusPeriodicReceiveModeInfo, 178 : PDMInfo, 179 : OLSCInfo, 180 : SREPOInfo, 181 : DauthInfo, 187 : SasbusInfo, 189 : PWMInfo, 191 : RTCInfo, 192 : regulatorInfo, 193 : LEDInfo, 197 : clkrstInfo, 202 : HIDInfo, 203 : LDNInfo, 205 : IRsensorInfo, 206 : captureInfo, 208 : manuInfo, 209 : ATKInfo, 210 : webInfo, 211 : LCSInfo, 212 : GRCInfo, 214 : albumInfo, 216 : migrationInfo, 217 : migrationIdcServerInfo, 218 : hidbusInfo, 223 : websocketInfo, 229 : notificationInfo, 230 : insInfo, 231 : lp2pInfo, 345 : libnxInfo, 346 : homebrewABIInfo, 347 : homebrewLoaderInfo, 348 : libnxNVIDIAErrorsInfo, 349 : libnxBinderErrorsInfo, 131 : A83Info};

module.exports = {NXModules};

